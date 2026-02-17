import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete('authenticated', { path: '/' })
	const session_id = cookies.get('session_id')
	throw redirect(307, '/terminal/login')
}
