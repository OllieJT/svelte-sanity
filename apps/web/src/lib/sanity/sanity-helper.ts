import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import type { z } from 'zod';
import { getClient } from './sanity-client';

// a function that writes an error to a file using node fs
export function writeErrorToFile(error: any) {
	// create a new date object
	const date = new Date();
	// get the current date and time
	const dateTime = date.toLocaleString();
	// create a new error object
	const errorObject = { dateTime, error };
	// convert the error object to a string
	const errorString = JSON.stringify(errorObject);
	// write
	fs.writeFile('./error.log.json', errorString, (err) => {
		if (err) {
			console.log(err);
		}
	});
}

export function urlFor(source: SanityImageSource) {
	return imageUrlBuilder(getClient()).image(source).auto('format').crop('focalpoint');
}

export interface QueryBuilder {
	QUERY: string;
	SCHEMA: z.ZodTypeAny;
	PARAMS: z.ZodTypeAny;
}

export function useGroq<Q extends QueryBuilder, V extends z.infer<Q['SCHEMA']>>(
	qb: Q,
	path: string,
) {
	return {
		get: async (params: Record<string, string | number | boolean> = {}) => {
			const data = await getClient().fetch(qb.QUERY, params);
			return data;
		},
		parse: (data: unknown): V => {
			const res = qb.SCHEMA.parse(data, { path: [path] });
			return res;
		},
	};
}

export async function runQuery<Q extends QueryBuilder, V extends z.infer<Q['SCHEMA']>>(
	qb: Q,
	path: string,
	PARAMS: Record<string, string | number | boolean> = {},
): Promise<V> {
	try {
		const groq = useGroq(qb, path);
		const payload = await groq.get(PARAMS);

		try {
			const data = groq.parse(payload);
			return data;
		} catch (e) {
			writeErrorToFile(e);
			console.log('⛔️⛔️⛔️');
			console.log('Error in routes/[slug]/+page.server.ts :: PageLoad');
			console.log('Error:', e);
			console.log('⛔️⛔️⛔️');
			// console.error(JSON.stringify(e, null, 4));
			throw error(500, {
				message: `⛔️ Something went wrong loading the page data`,
			});
		}
	} catch (e) {
		throw error(404, { message: `That page doesn't exist.` });
	}
}
