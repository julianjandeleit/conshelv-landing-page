/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/**.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'manrope': ['"manrope"'],
				'baskerville': ['"Libre Baskerville"'],
			},
		},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography'),],
	daisyui: {
		themes: [{
			conshelv: {
				"primary": "#38302E",
				"secondary": "#22AED1",
				"accent": "#b3d5ff",
				"neutral": "#e6edef",
				"base-100": "#ffffff",
				"info": "#a36f5b",
				"success": "#5aa53e",
				"warning": "#fbc25b",
				"error": "#ec255f",
				"fontFamily": "Anek Malayalam",
			},
		}]
	}
}
