<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	export let portableText: MarkComponentProps<any>;
</script>

<pre class="my-2 border border-pink-700 bg-pink-50 p-2 text-sm text-pink-600">
	{JSON.stringify(portableText.value, null, 4)}
	<br />
	<br />
	<br />
	<slot />
	<br />
	<br />
	<br />
</pre>
