const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

const brand = {
	mono: {
		50: '#FAFAFA',
		100: '#F5F5F5',
		200: '#E5E5E5',
		300: '#D4D4D4',
		400: '#A3A3A3',
		500: '#737373',
		600: '#525252',
		700: '#404040',
		800: '#262626',
		900: '#171717',
	},
	mired: {
		50: '#FFF1F2',
		100: '#FFE4E6',
		200: '#FCCFD4',
		300: '#F8AAB3',
		400: '#F17E93',
		500: '#E0527A',
		600: '#AE325E',
		700: '#8F1946',
		800: '#620E30',
		900: '#34091B',
	},
	migreen: {
		50: '#F3FDF2',
		100: '#E4FAE1',
		200: '#C3F4BE',
		300: '#98E391',
		400: '#7DC577',
		500: '#62AC53',
		600: '#329325',
		700: '#227619',
		800: '#185412',
		900: '#0C290A',
	},
	mitheme: {
		bg: 'var(--theme-50)',
		50: 'var(--theme-50)',
		100: 'var(--theme-100)',
		200: 'var(--theme-200)',
		300: 'var(--theme-300)',
		400: 'var(--theme-400)',
		500: 'var(--theme-500)',
		600: 'var(--theme-600)',
		700: 'var(--theme-700)',
		800: 'var(--theme-800)',
		900: 'var(--theme-900)',
	},
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Recoleta', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				green: brand.migreen,
				red: brand.mired,
				theme: brand.mitheme,
				mono: brand.mono,
				black: '#000',
				white: '#fff',
			},
			minWidth: {
				xs: '320px',
			},
			minHeight: {
				int: '48px',
			},
			maxWidth: {
				content: '880px',
			},
			height: {
				interactive: '48px',
			},
			borderRadius: {
				'4xl': '2.5rem',
				'5xl': '3rem',
				'6xl': '3.5rem',
			},
			lineHeight: {
				tighter: 1.125,
				squash: 0.8,
			},
			screens: {
				xs: '400px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('is-selected', ['&.is-selected']);
		}),
	],
};
