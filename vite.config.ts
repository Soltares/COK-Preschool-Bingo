import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		host: true,
		allowedHosts: true,
	},
	plugins: [sveltekit()],
})
