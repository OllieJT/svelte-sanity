import { page } from './documents/page/schema';
import { content } from './models/content/schema';
import { img } from './models/img/schema';
import { linkRoute } from './models/link/schema';
import { columns, theme } from './models/metadata/schema';
import { og } from './models/og/schema';
import { route } from './models/route/schema';

export const schema = {
	columns,
	content,
	img,
	linkRoute,
	og,
	page,
	route,
	theme,
} as const;
