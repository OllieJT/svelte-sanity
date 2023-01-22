import { dev } from '$app/environment';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { ClientConfig } from '@sanity/client';

const dataset = PUBLIC_SANITY_DATASET || 'production';
const projectId = PUBLIC_SANITY_PROJECT_ID;
// const token = SANITY_TOKEN;

if (!projectId) throw new Error('Missing environment variable PUBLIC_SANITY_PROJECT_ID');

export const sanityConfig: ClientConfig = {
	apiVersion: '2022-07-01', // year-day-month... silly Americans: https://www.sanity.io/docs/api-versioning

	dataset,
	projectId,
	useCdn: !dev,
	token: undefined,
	withCredentials: true,
};
