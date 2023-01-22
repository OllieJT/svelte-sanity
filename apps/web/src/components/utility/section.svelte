<script lang="ts">
	import Gutter from './gutter.svelte';
	import Width from './width.svelte';

	export let title: string | undefined = undefined;
</script>

<section>
	<Gutter class="bg-white">
		<Width size="large" class="space-y-16 py-20">
			{#if title || $$slots.title}
				<Width size="default" class="text-center">
					{#if title}
						<h2 class="font-serif text-5xl font-medium">{title}</h2>
					{/if}
					{#if $$slots.title}
						<slot name="title" />
					{/if}
				</Width>
			{/if}

			<slot />
		</Width>
	</Gutter>
</section>
