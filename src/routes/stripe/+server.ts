import { type RequestHandler } from '@sveltejs/kit'
import { checkoutCompleted } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	const payload = await request.json()
	if (payload?.type == 'checkout.session.completed') {
		checkoutCompleted(payload)
	}
	return new Response()
}
