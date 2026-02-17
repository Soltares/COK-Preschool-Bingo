import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ cookies }) => {
	const authenticated = cookies.get('authenticated')
	if (!authenticated) throw redirect(307, '/terminal/login')
}
