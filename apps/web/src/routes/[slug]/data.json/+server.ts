import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const res = { number: Math.random() };

	const headers = new Headers();
	headers.append('Cache-Control', 'public, max-age=0');
	// headers.append('Cache-Control', 'public, max-age=86400');
	// headers.append('Content-Type', 'application/json');

	return new Response(JSON.stringify(res), { headers });
};
