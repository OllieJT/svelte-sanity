import { z } from 'zod';
import { sanity } from '../../lib/sanity';

export const img = sanity.image.extend({
	alt: z.string().nullish(),
	caption: z.string().nullish(),
});
