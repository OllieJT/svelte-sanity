<script lang="ts">
	import Marker from '$src/components/utility/underline.svelte';
	import type { MarkComponentProps } from '@portabletext/svelte';

	export let portableText: MarkComponentProps<{
		_key: string;
		_type: 'mark';
		width: number;
	}>;

	// TODO: Add underline styles
</script>

<Marker width={portableText.value.width}>
	<slot />
</Marker>

<!-- <mark class="inlinw relative overflow-visible bg-transparent">
	<slot />
	<div class="absolute top-full left-0 right-0 bottom-0 overflow-visible mix-blend-color-burn">
		{#if portableText.value.underline === 'a'}
			<div class="h-2 w-full -translate-y-4 rounded bg-red-600" />
		{:else}
			<div class="h-2 w-full -translate-y-4 rounded bg-red-600" />
		{/if}
	</div>
</mark> -->
