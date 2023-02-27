/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'manrope': ['"manrope"'],
				'baskerville': ['"Libre Baskerville"'],
			  },
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [{
		  conshelv: {
			"primary": "#5f5a52",
			"secondary": "#22AED1",
			"accent": "#2f2d4b64",
			"neutral": "#f3ede2",
			"base-100": "#ffffff",
			"info": "#a36f5b",
			"success": "#5aa53e",
			"warning": "#fbc25b",
			"error": "#ec255f",
			"fontFamily": "Anek Malayalam",
		  },}]
		}
}
