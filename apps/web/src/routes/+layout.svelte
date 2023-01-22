<script lang="ts">
	import Footer from '$src/components/layout/footer.svelte';
	import Navbar from '$src/components/layout/navbar.svelte';
	import '@fontsource/inter/variable.css';
	import '../app.css';
	import '../fonts.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

</script>

<pre>{JSON.stringify(data,null,3)}</pre>

<Navbar />

<slot />

<Footer/>
