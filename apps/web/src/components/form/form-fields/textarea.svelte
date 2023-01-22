<script lang="ts">
	import type { FormFieldProps } from './types';
	import { handleAutocomplete } from './utility';

	export let opts: Extract<FormFieldProps, { type: 'textarea' }>;
</script>

<textarea
	autocomplete={handleAutocomplete(opts.autocomplete)}
	bind:value={opts.value}
	class="form-input"
	id={opts.id}
	name={opts.id}
	required={!opts.optional}
	rows={opts.rows || 5}
/>
