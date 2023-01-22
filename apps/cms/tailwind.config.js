/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('local-tailwind-base')],
	content: [
		'../../packages/local-schema/**/*.{tsx,html}',
		'./lib/**/*.{tsx,html}',
		'./_document.tsx',
	],
};
