import { z } from 'zod';
import { sanity } from '../../lib/sanity';

export const linkRoute = z.object({
	_type: z.literal('linkRoute'),
	reference: sanity.reference,
});
