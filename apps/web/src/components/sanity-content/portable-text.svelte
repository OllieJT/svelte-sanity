<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import BlockDebugger from './block-debug.svelte';
	import HardBreak from './hard-break.svelte';
	import MarkDebugger from './mark/mark-debug.svelte';
	import MarkEmphasis from './mark/mark-emphasis.svelte';
	import MarkLabel from './mark/mark-label.svelte';
	import MarkMark from './mark/mark-mark.svelte';
	import MarkSmall from './mark/mark-small.svelte';
	import MarkStrong from './mark/mark-strong.svelte';
	import MarkUnderline from './mark/mark-underline.svelte';
	import StyleBlockquote from './style-blockquote.svelte';
	import StyleListItem from './style-list-item.svelte';
	import StyleList from './style-list.svelte';

	export let blocks: any[];
</script>

<PortableText
	value={blocks}
	components={{
		types: {
		},
		marks: {
			u: MarkUnderline,
			strong: MarkStrong,
			em: MarkEmphasis,
			small: MarkSmall,
			label: MarkLabel,
			mark: MarkMark,
		},
		block: {
			blockquote: StyleBlockquote,
		},
		listItem: StyleListItem,
		list: StyleList,
		hardBreak: HardBreak,
		unknownMark: MarkDebugger,
		unknownType: BlockDebugger,
	}}
	onMissingComponent={(error) => {
		if (error.includes('was created with unknown')) return;
		//console.log(error);
		//console.warn(error);
	}}
/>
