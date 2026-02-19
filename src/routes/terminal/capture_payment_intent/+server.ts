import { json, type RequestHandler } from '@sveltejs/kit'
import { capturePaymentIntent } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	const { id } = await request.json()
	return json(await capturePaymentIntent(id))
}
