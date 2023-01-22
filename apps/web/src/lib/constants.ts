import { dev } from '$app/environment';

//TODO Set default metadata
export const SITE = {
	name_short: 'TODO',
	name_long: 'TODO',
	description: 'TODO',
	title: 'TODO',
	titleTemplate: '%s | TODO',
	openGraph: {
		type: 'website',
		locale: 'en_GB',
		site_name: 'TODO',
	},

	color_fg: '#f05',
	color_bg: '#fff',

	url: dev ? 'http://127.0.0.1:5173' : 'https://www.website.com',
};
