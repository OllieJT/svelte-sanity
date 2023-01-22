import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	console.info(`Server: Loading page for /${params.slug}`);

	const res = { number: Math.random() };

	return res;
};
