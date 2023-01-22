<script lang="ts">
	import FormFieldContainer from './form-fields/form-field-container.svelte';
	import InputDate from './form-fields/input-date.svelte';
	import InputEmail from './form-fields/input-email.svelte';
	import InputNumber from './form-fields/input-number.svelte';
	import InputText from './form-fields/input-text.svelte';
	import InputUrl from './form-fields/input-url.svelte';
	import Select from './form-fields/select.svelte';
	import Textarea from './form-fields/textarea.svelte';
	import type { FormFieldProps } from './form-fields/types';

	export let field: FormFieldProps;
	export let help: boolean = false;
</script>

<FormFieldContainer
	size={field.size}
	label={field.label}
	description={field.description}
	id={field.id}
	required={!field.optional}
	{help}
>
	{#if field.type === 'input-date'}
		<InputDate opts={field} />
	{:else if field.type === 'input-email'}
		<InputEmail opts={field} />
	{:else if field.type === 'input-number'}
		<InputNumber opts={field} />
	{:else if field.type === 'input-text'}
		<InputText opts={field} />
	{:else if field.type === 'input-url'}
		<InputUrl opts={field} />
	{:else if field.type === 'select'}
		<Select opts={field} />
	{:else if field.type === 'textarea'}
		<Textarea opts={field} />
	{:else}
		<pre class="bg-yellow-100 text-pink-700">
			{JSON.stringify({ error: `Unhandled input`, field }, null, 3)}
		</pre>
	{/if}
</FormFieldContainer>
