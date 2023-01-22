import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	console.info(`Server: Loading layout data`);
	const res = { number: Math.random() };

	return res;
};
