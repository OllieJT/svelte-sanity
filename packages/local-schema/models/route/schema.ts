import { z } from 'zod';

export const route = z.object({
	_type: z.literal('route'),
	label: z.string(),
	slug: z.object({ current: z.string() }).transform((s) => s.current),
});
