<script lang="ts">
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import type { ButtonAlign, ButtonIcons, ButtonLabels, ButtonState } from './types';

	export let icons: ButtonIcons;
	export let labels: ButtonLabels;
	export let state: ButtonState = 'resting';
	export let align: ButtonAlign = 'left';

	$: icon = icons[state] || icons.resting;
	$: label = labels[state] || labels.resting;

	const dispatch = createEventDispatcher();
</script>

<button
	disabled={state === 'disabled'}
	on:click={() => dispatch('click', { state })}
	class={clsx(
		'text-label group flex items-center justify-center px-1',
		align === 'left' ? 'flex-row-reverse' : 'flex-row',

		state === 'resting' && 'text-mono-600 hover:text-green-700',
		state === 'active' && 'text-green-700 hover:text-red-700',
		state === 'disabled' && 'text-mono-600 pointer-events-none',
	)}
>
	<span class="xs:not-sr-only xs:px-3 xs:py-2 sr-only">{label}</span>
	<div
		class={clsx(
			'ease aspect-1 inline-flex h-12 w-12 items-center justify-center ring-0 transition-all group-hover:ring-2 group-hover:ring-offset-2',
			state === 'resting' &&
				'text-mono-500 ring-mono-200 rounded-xl bg-white ring-1 group-hover:rounded-3xl group-hover:bg-green-600 group-hover:text-white group-hover:ring-green-600',
			state === 'active' &&
				'rounded-3xl bg-green-200 text-green-800 ring-green-200 group-hover:rounded-xl group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600',
			state === 'disabled' && 'bg-mono-100 text-mono-400 ring-mono-200 rounded-xl ring-1',
		)}
	>
		<svelte:component this={icon} class="block h-5 w-5" />
	</div>
</button>
