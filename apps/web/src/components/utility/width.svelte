<script lang="ts">
	const sizes = {
		small: 'max-w-prose',
		default: 'max-w-content',
		large: 'max-w-7xl',
	};
	export let size: keyof typeof sizes = 'default';
	$: maxw = sizes[size];
</script>

<div class="mx-auto {maxw} {$$props.class}">
	<slot />
</div>
