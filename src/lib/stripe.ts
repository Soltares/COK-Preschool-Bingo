import { env } from '$env/dynamic/private'
import { formatCents, type InvoiceItem } from '$lib'
import Stripe from 'stripe'

const stripe = new Stripe(env.STRIPE_SECRET_KEY)

export async function beginCheckout(cart: InvoiceItem[]) {
	const line_items = cart.map((item) => {
		return {
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					images: [`${env.BASE_URL}/logo.png`],
					description: item.description,
				},
				unit_amount: item.priceCents,
			},
			quantity: item.count,
		}
	})

	const description = cart.map((item) => `${item.name} (${item.count} x ${formatCents(item.priceCents)})`).join(', ')
	const session = await stripe.checkout.sessions.create({
		// payment_method_types: ["card"],
		submit_type: 'pay',
		line_items,
		invoice_creation: { enabled: false, invoice_data: { description } },
		mode: 'payment', // "payment" for one-time, "subscription" for recurring
		success_url: `${env.BASE_URL}/thankyou`, // Where to go after payment
		cancel_url: `${env.BASE_URL}/purchase`, // Where to go if they click back
		payment_intent_data: { description },
	})

	return { url: session.url }
}

export function discordSend(content: string) {
	if (!env.DISCORD_WEBHOOK) return
	return fetch(env.DISCORD_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) })
}

export function checkoutCompleted(payload: any) {
	const detail = {
		email: payload?.data?.object?.customer_details?.email,
		name: payload?.data?.object?.customer_details?.name,
		amountCents: payload?.data?.object?.amount_total,
		description: payload?.data?.object?.invoice_creation?.invoice_data?.description,
	}

	console.log(JSON.stringify({ type: 'checkout', ...detail }))
	discordSend(`${formatCents(detail.amountCents)} :dollar: ${detail.name} ${detail.email} - ${detail.description}`)
}

// app.post('/connection_token', async (req, res) => {
export async function createTerminalConnection() {
	let connectionToken = await stripe.terminal.connectionTokens.create()
	return { secret: connectionToken.secret }
}

// app.post('/create_payment_intent', async (req, res) => {
export async function createTerminalPaymentIntent(amount: number, email: string, description: string) {
	// For Terminal payments, the 'payment_method_types' parameter must include 'card_present'.
	// To automatically capture funds when a charge is authorized, set `capture_method` to `automatic`.
	console.log('/create_payment_intent', amount, email, description)
	try {
		const intent = await stripe.paymentIntents.create({
			amount: Math.ceil(amount * 100), // Convert to cents
			currency: 'usd',
			payment_method_types: ['card_present'],
			capture_method: 'manual',
			receipt_email: email?.length ? email : undefined,
			description: description?.length ? description : undefined,
		})
		return intent
	} catch (e) {
		console.error(e)
	}
}

// app.post('/cancel_payment_intent', async (req, res) => {
export async function cancelPaymentIntent(id: string) {
	console.log('/cancel_payment_intent', id)
	return await stripe.paymentIntents.cancel(id)
}

// app.post('/capture_payment_intent', async (req, res) => {
export async function capturePaymentIntent(id: string) {
	return await stripe.paymentIntents.capture(id)
}
