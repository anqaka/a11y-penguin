/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				penguin: {
					"primary": "#a5f3fc",
					"secondary": "#0284c7",
					"accent": "#f5d0fe",
					"neutral": "#181A2A",
					"base-100": "#FFFFFF",
					"info": "#075985",
					"success": "#16a34a",
					"warning": "#f59e0b",
					"error": "#dc2626",
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
