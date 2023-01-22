<script lang="ts">
	import clsx from 'clsx';

	export let size: 1 | 2 | 3 = 2;
	export let label: string;
	export let description: string | undefined = undefined;
	export let id: string;
	export let required: boolean;
	export let help: boolean;

	const hintContent = {
		required: 'Required',
		optional: 'Optional',
	} as const;

	$: hint = help && hintContent[required ? 'required' : 'optional'];
</script>

<div
	class={clsx(
		'flex shrink grow basis-full flex-col space-y-3 p-1',
		size === 1 ? 'sm:basis-1/3' : size === 2 ? 'sm:basis-1/2' : 'sm:basis-full',
	)}
>
	<label for={id} class="text-mono-700 flex items-center text-base font-medium leading-normal">
		{label}
		{#if hint}
			<span
				class:text-mono-500={!required}
				class:text-red-600={required}
				class:border-red-200={required}
				class:bg-red-50={required}
				class="text-label ml-2 inline shrink-0 grow-0 rounded-md border border-transparent bg-white px-1 py-0.5 font-normal leading-none"
			>
				{hint}
			</span>
		{/if}
	</label>
	<slot />
	{#if description}
		<p class="text-mono-500 text-sm italic leading-tight">
			{description}
		</p>
	{/if}
</div>
