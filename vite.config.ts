import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		host: true,
		allowedHosts: true,
		port: Number(process.env.PORT ?? 5173),
	},
	plugins: [sveltekit()],
})
