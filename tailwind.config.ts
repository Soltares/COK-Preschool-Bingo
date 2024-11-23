import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'bingo-blue': '#0c14b4',
				'bingo-yellow': '#fef250',
				'bingo-green': '#77c541'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config
