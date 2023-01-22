<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<any>;
</script>

<blockquote cite="Madeline">
	{'❝'}Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
	Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh
	id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.{'❞'}
	<span class="text-label mt-1 ml-auto block text-right font-normal italic"> Madeline</span>
</blockquote>
