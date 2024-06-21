/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  libre: ['"JetBrains Mono"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require("@catppuccin/tailwindcss")],
}
