import { defineType } from 'sanity';

export const theme = defineType({
	title: 'Theme Color',
	name: 'theme',
	type: 'string',
	options: {
		list: [
			{ title: 'Auto', value: 'auto' },
			{ title: 'Green', value: 'green' },
			{ title: 'Red', value: 'red' },
		],
	},
	initialValue: 'auto',
	validation: (Rule) => Rule.required(),
});

export const columns = defineType({
	title: 'Columns',
	description:
		'Column count will vary depending on screensize. This determines the maximum number of columns.',
	name: 'columns',
	type: 'number',
	options: {
		list: [
			{ title: '2 Columns', value: 2 },
			{ title: '3 Columns', value: 3 },
			{ title: '4 Columns', value: 4 },
		],
	},
	initialValue: 3,
	validation: (Rule) => Rule.required(),
});
