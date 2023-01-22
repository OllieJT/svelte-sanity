<script lang="ts">
	import { page } from '$app/stores';
	import FormField from './form-field.svelte';
	import Form from './form-fields/form-container.svelte';
	import type { CreateForm } from './form-fields/types';

	export let error: string | undefined = undefined;
	export let form: CreateForm;
	export let initialValues: Record<string, any>;
	export let redirect: string | undefined = new URL($page.url).pathname;

	function useInitialValue(values: typeof initialValues, key: string) {
		if (Object.hasOwn(values, key)) {
			return values[key];
		} else {
			return undefined;
		}
	}
</script>

<Form action={form.action}>
	{#each form.fields as field}
		{@const initialValue = useInitialValue(initialValues, field.id)}
		<FormField
			field={{
				...field,
				value: initialValue || field.value,
			}}
			help={Boolean(error)}
		/>
	{/each}
	<input type="text" hidden value={redirect} name="redirect" />
</Form>
