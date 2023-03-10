import { withSentryConfig } from '@sentry/svelte';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$lib: 'src/lib',
		},
		env: {
			dir: '../../',
		},
	},

	vitePlugin: { experimental: { inspector: { holdMode: true } } },
};

export default withSentryConfig(config);
