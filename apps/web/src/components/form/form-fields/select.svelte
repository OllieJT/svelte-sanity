<script lang="ts">
	import type { FormFieldProps } from './types';
	import { handleAutocomplete } from './utility';

	export let opts: Extract<FormFieldProps, { type: 'select' }>;
</script>

<select
	autocomplete={handleAutocomplete(opts.autocomplete)}
	bind:value={opts.value}
	class="form-input"
	id={opts.id}
	name={opts.id}
	required={!opts.optional}
>
	{#each opts.options as option}
		{#if typeof option === 'string'}
			<option>{option}</option>
		{:else}
			<option value={option.value}>{option.label}</option>
		{/if}
	{/each}
</select>
