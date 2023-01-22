<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<any>;
</script>

<pre class="my-2 border border-red-700 bg-red-50 p-2 text-sm text-red-600">
	{JSON.stringify(portableText.value, null, 4)}
</pre>
