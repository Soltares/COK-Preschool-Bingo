import { json, type RequestHandler } from '@sveltejs/kit'
import { createTerminalConnection } from '$lib/stripe'

export const POST: RequestHandler = async ({ request }) => {
	return json(await createTerminalConnection())
}
