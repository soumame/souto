/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Maru': ['kinuta-maruminold-stdn', 'serif'],
				'Yu': ['yu-gothic-pr6n', 'sans-serif'],
				'Hegante': ['hegante', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
