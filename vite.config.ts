import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		host: true,
		allowedHosts: true,
		proxy: {
			'/api': {
				target: `http://localhost:${process.env.PORT ?? 5321}`,
				changeOrigin: true,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [sveltekit()],
})
