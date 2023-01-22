import { z } from 'zod';
import { img } from '../img/schema';

export const og = z.object({
	_type: z.literal('og'),
	title: z.string(),
	description: z.string(),
	images: z.array(img).nullish(),
});
