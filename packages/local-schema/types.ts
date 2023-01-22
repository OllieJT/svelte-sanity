import { page } from './documents/page/type';
import { content } from './models/content/type';
import { img } from './models/img/type';
import { linkRoute } from './models/link/type';
import { columns, theme } from './models/metadata/type';
import { og } from './models/og/type';
import { route } from './models/route/type';

export const schemaTypes = [columns, content, img, linkRoute, og, page, route, theme];
