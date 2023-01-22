<script lang="ts">
	import type { IconType } from '$src/lib/types';
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import ButtonWrapper from './button-wrapper.svelte';
	import type { ButtonAlign } from './types';

	export let icon: IconType | undefined = undefined;
	export let href: string | undefined = undefined;
	export let align: ButtonAlign = 'left';
	export let isExternal = false;

	const dispatch = createEventDispatcher();
</script>

<ButtonWrapper {href} {align} on:click={() => dispatch('click')} newTab={isExternal}>
	<span class="flex items-center justify-center px-6 py-3"><slot /></span>
	{#if icon}
		<div
			class={clsx(
				'ease aspect-1 ml-4 -mr-4 inline-flex items-center justify-center transition-all',
				'text-inherit group-hover:text-white',
			)}
		>
			<svelte:component this={icon} class="block h-5 w-5" />
		</div>
	{/if}
</ButtonWrapper>
