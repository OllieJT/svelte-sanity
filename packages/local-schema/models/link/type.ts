import { prettyUrl } from 'local-helpers/urls';
import { defineField } from 'sanity';

export const linkRoute = defineField({
	title: 'Internal link',
	name: 'linkRoute',
	type: 'object',
	fields: [
		defineField({
			title: 'Page',
			name: 'reference',
			type: 'reference',
			to: [
				{ type: 'page' },
				{ type: 'dbUrls' },
				{ type: 'podcastEpisode' },
				{ type: 'podcastFeed' },
			],
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			routeLabel: 'reference.route.label',
			routeSlug: 'reference.route.slug.current',
			linkLabel: 'reference.label',
			linkUrl: 'reference.url',
		},
		prepare(select) {
			const url = select.linkUrl && prettyUrl(select.linkUrl);
			const slug = `/${select.routeSlug}`.replace('//', '/');

			const title = select.linkLabel || select.routeLabel || '';
			const subtitle = url || slug || '';
			return {
				...select,
				title,
				subtitle,
			};
		},
	},
});
