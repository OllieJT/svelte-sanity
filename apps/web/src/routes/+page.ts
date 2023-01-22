import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	console.info(`Server: Loading page for homepage`);
	const res = { number: Math.random() };

	return res;
};
