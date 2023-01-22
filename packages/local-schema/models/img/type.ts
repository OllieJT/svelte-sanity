import { defineField } from 'sanity';

export const img = defineField({
	title: 'Image',
	name: 'img',
	type: 'image',
	options: {
		hotspot: true,
		storeOriginalFilename: false,
		collapsible: true,
		collapsed: true,
	},
	fields: [
		defineField({
			title: 'Accesible Description',
			description:
				"Describe what is in this image for someone who can't see it. It will not be shown on the page.",
			name: 'alt',
			type: 'string',
		}),
		defineField({
			title: 'Caption',
			description: 'This text will sometimes be shown alongside the image',
			name: 'caption',
			type: 'text',
		}),
	],
});
