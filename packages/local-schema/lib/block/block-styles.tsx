import type { BlockStyleDefinition } from 'sanity';

export const blockStyles = {
	h1: {
		title: 'H1',
		value: 'h1',
		component: ({ children }) => <h1>{children}</h1>,
	},
	h2: {
		title: 'H2',
		value: 'h2',
		component: ({ children }) => <h2>{children}</h2>,
	},
	h3: {
		title: 'H3',
		value: 'h3',
		component: ({ children }) => <h3>{children}</h3>,
	},
	h4: {
		title: 'H4',
		value: 'h4',
		component: ({ children }) => <h4>{children}</h4>,
	},
	h5: {
		title: 'H5',
		value: 'h5',
		component: ({ children }) => <h5>{children}</h5>,
	},
	normal: {
		title: 'Paragraph',
		value: 'normal',
		component: ({ children }) => <p>{children}</p>,
	},
	normalDisabled: {
		title: 'Default',
		value: 'normal',
		component: ({ children }) => (
			<span className="inline-block bg-yellow-300 leading-loose text-red-600">{children}</span>
		),
	},
	blockquote: {
		title: 'Blockquote',
		value: 'blockquote',
		component: ({ children }) => <blockquote>{children}</blockquote>,
	},
} satisfies Record<string, BlockStyleDefinition>;
