import { json, type RequestHandler } from '@sveltejs/kit'
import { beginCheckout } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	const cart = await request.json()
	return json(await beginCheckout(cart))
}
