import { slugify } from 'local-helpers/urls';
import { defineField, defineType } from 'sanity';

export const route = defineType({
	title: 'Page Metadata',
	description: 'These metadata fields are used to generate the page URL and site navigation',
	name: 'route',
	type: 'object',
	fields: [
		defineField({
			title: 'Label',
			description: 'A short label for this page if it appears in a menu.',
			name: 'label',
			type: 'string',
			validation: (Rule) => Rule.required().max(20),
		}),
		defineField({
			title: 'Slug',
			description: 'The relative path to this page. This will be used to determine the URL.',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'route.label',
				slugify,
			},
			readOnly: ({ document }) => {
				if (
					document?._id === 'homepage' ||
					document?._type === 'podcastFeed' ||
					document?._type === 'podcastEpisode' ||
					document?._id === 'contact-coaching' ||
					document?._id === 'contact-retreats' ||
					document?._id === 'contact'
				)
					return true;
				return false;
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	options: {
		collapsed: true,
	},
});
