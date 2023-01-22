import { z } from 'zod';

export const theme = z.union([z.literal('auto'), z.literal('green'), z.literal('red')]);

export const columns = z.union([z.literal(2), z.literal(3), z.literal(4)]);
