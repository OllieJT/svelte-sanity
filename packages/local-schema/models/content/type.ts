import { defineType } from 'sanity';
import { annotations, blockStyles, decorator } from '../../lib/block';

export const content = defineType({
	title: 'Content',
	name: 'content',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				blockStyles.h2,
				blockStyles.h3,
				blockStyles.h4,
				blockStyles.h5,
				blockStyles.normal,
				blockStyles.blockquote,
			],
			marks: {
				decorators: [
					decorator.bold,
					decorator.italic,
					decorator.underline,
					decorator.small,
					decorator.label,
				],
				annotations: [annotations.linkRoute],
			},
			options: {
				spellCheck: true,
			},
			of: [{ type: 'rate' }],
		},
	],
});
