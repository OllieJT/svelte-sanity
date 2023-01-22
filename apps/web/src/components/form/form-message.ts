import type { CreateForm } from './form-fields/types';

export const formMessage = {
	action: '/contact?/message',
	fields: [
		{
			type: 'input-text',
			label: 'Name',
			id: 'name',
			size: 2,
		},
		{
			type: 'input-email',
			label: 'Email',
			id: 'email',
			size: 2,
		},
		{
			type: 'textarea',
			label: 'Message',
			id: 'message',
			size: 3,
		},
	],
} satisfies CreateForm;
