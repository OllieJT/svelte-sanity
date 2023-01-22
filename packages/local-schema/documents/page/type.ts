import { defineField, defineType } from 'sanity';

export const page = defineType({
	title: 'Page',
	name: 'page',
	type: 'document',
	groups: [
		{ title: 'Metadata', name: 'metadata' },
		{ title: 'Content', name: 'content' },
	],
	fields: [
		defineField({
			title: 'Route',
			type: 'route',
			name: 'route',
			group: 'metadata',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'OpenGraph',
			type: 'og',
			name: 'og',
			group: 'metadata',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'route.label',
			slug: 'route.slug.current',
			media: 'og.images[0]',
			headline: 'og.title',
			description: 'og.description',
		},
		prepare(select) {
			const { slug, media } = select;
			const url = new URL(`https://website.com/${slug}`);

			return {
				...select,
				subtitle: url.pathname.replace('//', '/'),
				media,
				url: url.href,
			};
		},
	},
});
