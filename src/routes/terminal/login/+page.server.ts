import type { Actions } from './$types'
import { TERMINAL_USER, TERMINAL_PASSWORD } from '$env/static/private'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
	const authenticated = cookies.get('authenticated')
	if (authenticated) throw redirect(307, '/terminal')
}

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData()
		const user = data.get('user')
		const password = data.get('password')

		if (user === TERMINAL_USER && password === TERMINAL_PASSWORD) {
			const one_week = 60 * 60 * 24 * 7
			cookies.set('authenticated', crypto.randomUUID(), {
				path: '/',
				maxAge: one_week,
			})

			throw redirect(303, '/terminal')
		}

		return fail(401, { password_correct: false })
	},
}
