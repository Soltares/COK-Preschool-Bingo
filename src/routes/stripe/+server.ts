import { type RequestHandler } from '@sveltejs/kit'
import { checkoutCompleted, paymentIntentSucceeded } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	const payload = await request.json()
	console.log('stripe payload', JSON.stringify(payload))
	if (payload?.type == 'payment_intent.succeeded') {
		paymentIntentSucceeded(payload)
	} else if (payload?.type == 'checkout.session.completed') {
		checkoutCompleted(payload)
	}

	return new Response()
}
