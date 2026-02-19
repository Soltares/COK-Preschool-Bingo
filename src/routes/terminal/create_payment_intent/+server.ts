import { json, type RequestHandler } from '@sveltejs/kit'
import { createTerminalPaymentIntent } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	const { amount, email, description } = await request.json()
	return json(await createTerminalPaymentIntent(amount, email, description))
}
