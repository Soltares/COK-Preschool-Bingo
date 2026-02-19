import { type RequestHandler } from '@sveltejs/kit'
import { paymentIntentSucceeded } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	const payload = await request.json()
	if (payload?.type == 'payment_intent.succeeded') {
		paymentIntentSucceeded(payload)
	}

	return new Response()
}
