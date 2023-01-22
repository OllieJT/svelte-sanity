<script lang="ts">
	import clsx from 'clsx';

	export let action: string;
	export let cta: string = 'Send';
</script>

<form method="POST" {action} class={clsx('flex flex-col items-stretch', $$props.class)}>
	<div class="flex flex-row flex-wrap gap-y-4">
		<slot />
	</div>
	<slot name="footer" />

	<div class="flex flex-row items-center justify-end py-2">
		<button
			type="submit"
			class={clsx(
				'min-h-int group flex flex-row items-stretch justify-center rounded-full border border-white text-base font-medium leading-none ring-0 transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2',
				'bg-green-300 text-green-900 ring-green-600 hover:bg-green-600 hover:text-white',
			)}
		>
			<span class="flex items-center justify-center px-6 py-3">{cta}</span>
		</button>
	</div>
</form>
