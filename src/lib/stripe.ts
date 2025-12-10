import { STRIPE_SECRET_KEY, DISCORD_WEBHOOK, BASE_URL } from '$env/static/private'
import { formatCents, type InvoiceItem } from '$lib'
import Stripe from 'stripe'

const stripe = new Stripe(STRIPE_SECRET_KEY)

export async function beginCheckout(cart: InvoiceItem[]) {
	const line_items = cart.map((item) => {
		return {
			price_data: {
				currency: 'usd',
				product_data: {
					name: item.name,
					images: [`${BASE_URL}/logo.png`],
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
		invoice_creation: { enabled: true, invoice_data: { description } },
		mode: 'payment', // "payment" for one-time, "subscription" for recurring
		success_url: `${BASE_URL}/thankyou`, // Where to go after payment
		cancel_url: `${BASE_URL}/purchase`, // Where to go if they click back
	})

	return { url: session.url }
}

export function discordSend(content: string) {
	if (!DISCORD_WEBHOOK) return
	return fetch(DISCORD_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) })
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
