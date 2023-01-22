import { z } from 'zod';
import { og } from '../../models/og/schema';
import { route } from '../../models/route/schema';

export const page = z.object({
	_type: z.literal('page'),
	route: route,
	og: og,
});
