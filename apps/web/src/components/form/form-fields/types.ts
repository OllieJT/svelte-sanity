import type {} from 'zod';

type FormFieldInput =
	| { type: 'input-date'; value?: Date }
	| { type: 'input-email'; value?: string }
	| { type: 'input-number'; value?: number }
	| { type: 'input-text'; value?: string }
	| { type: 'input-url'; value?: string }
	| { type: 'select'; value?: string; options: string[] | { label: string; value: string }[] }
	| { type: 'textarea'; value?: string; rows?: number };

export type FormFieldProps = FormFieldInput & {
	size?: 1 | 2 | 3;
	label: string;
	description?: string;
	id: string;
	autocomplete?: boolean;
	optional?: boolean;
};

export type CreateForm = {
	action: string;
	cta?: string;
	fields: FormFieldProps[];
};
