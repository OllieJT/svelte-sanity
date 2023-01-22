<script lang="ts">
	import Gutter from '$src/components/utility/gutter.svelte';
	import Width from '$src/components/utility/width.svelte';
	import { SITE } from '$src/lib/constants';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<MetaTags
	title="Under Construction"
	description="Under Construction"
	openGraph={{
		...SITE.openGraph,
	}}
/>


<section class="py-10">
	<Gutter>
		<Width>
			<h1>Hello World</h1>
			<p>Hello World</p>
			<pre>{JSON.stringify(data,null,3)}</pre>
		</Width>
	</Gutter>
</section>
