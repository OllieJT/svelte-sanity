import { FaBold, FaHeading, FaItalic, FaTextHeight, FaUnderline } from 'react-icons/fa';
import { defineField, type BlockDecoratorDefinition } from 'sanity';
import { linkRoute } from '../../models/link/type';

export const decorator = {
	bold: { title: 'Bold', value: 'strong', icon: FaBold },
	italic: { title: 'Italic', value: 'em', icon: FaItalic },
	underline: {
		title: 'Underline',
		value: 'u',
		icon: FaUnderline,
		component: ({ children }) => <u className="decoration-red-500">{children}</u>,
	},
	small: {
		title: 'Small',
		value: 'small',
		icon: FaTextHeight,
		component: ({ children }) => <small>{children}</small>,
	},
	label: {
		title: 'Label',
		value: 'label',
		icon: FaHeading,
		component: ({ children }) => <small className="text-label font-semibold">{children}</small>,
	},
} satisfies Record<string, BlockDecoratorDefinition>;

export const annotations = {
	linkRoute,
	mark: defineField({
		title: 'Fancy Underline',
		name: 'mark',
		type: 'object',
		fields: [
			defineField({
				title: 'Underline Thickness',
				description:
					'This will vary based on how long the word is you are highlighting. A good value to start with is 20',
				name: 'width',
				type: 'number',
				validation: (Rule) => Rule.required().min(1).max(100),
			}),
		],
		preview: {
			select: {
				title: 'url',
				subtitle: 'url',
			},
		},
	}),
};
