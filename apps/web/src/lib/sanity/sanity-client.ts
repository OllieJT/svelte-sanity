import createClient from '@sanity/client';
import { sanityConfig } from './sanity-config';

// Set up the client for fetching data in the getProps page functions
const sanityClient = createClient(sanityConfig);

// Set up a preview client with serverless authentication for drafts
const previewClient = createClient({ ...sanityConfig, useCdn: false });

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview = false) => (usePreview ? previewClient : sanityClient);
