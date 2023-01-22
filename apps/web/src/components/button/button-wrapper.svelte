<script lang="ts">
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import type { ButtonAlign } from './types';

	export let href: string | undefined;
	export let align: ButtonAlign;
	export let newTab = false;

	const dispatch = createEventDispatcher();
</script>

{#if href}
	<a
		on:click={() => dispatch('click')}
		{href}
		target={newTab ? '_blank' : undefined}
		class={clsx(
			'min-h-int group flex items-stretch justify-center rounded-full border border-white text-base font-medium leading-none shadow-lg ring-2 ring-offset-2 transition-all duration-300 ease-out hover:shadow-2xl',
			'bg-theme-300 text-theme-900 shadow-theme-300 ring-theme-100 hover:bg-theme-600 hover:ring-theme-600 hover:text-white',
			align === 'left' ? 'flex-row-reverse' : 'flex-row',
			$$props.class,
		)}
	>
		<slot />
	</a>
{:else}
	<button
		on:click={() => dispatch('click')}
		class={clsx(
			'min-h-int group flex items-stretch justify-center rounded-full border border-white text-base font-medium leading-none ring-0 transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2',
			'bg-theme-300 text-theme-900 ring-theme-600 hover:bg-theme-600 hover:text-white',
			align === 'left' ? 'flex-row-reverse' : 'flex-row',
			$$props.class,
		)}
	>
		<slot />
	</button>
{/if}
