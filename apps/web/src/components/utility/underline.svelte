<script lang="ts">
	import { onMount } from 'svelte';

	// let offsetWidth = 0;
	// let clientWidth = 0;
	// $: length = content.length;
	export let width = 20;

	$: startPoint = `M5 25`;
	$: startCurve = `c100-10`;
	$: endCurve = `310-35`;
	$: endPoint = `455-15`;

	function randomize() {
		startPoint = `M5 25`;
		startCurve = `c${rn(80, 120)}-${rn(5, 20)}`;
		endCurve = `${rn(280, 320)}-${rn(25, 35)}`;
		endPoint = `${rn(450, 455)}-${rn(10, 20)}`;
	}

	function rn(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	onMount(randomize);
</script>

<mark contenteditable class="relative inline overflow-visible bg-transparent text-current">
	<span class="relative z-0"><slot /></span>
	<!-- mix-blend-multiply or mix-blend-color -->
	<span
		class="absolute -left-1 -right-1 top-full z-10 block -translate-y-[0.33ch] overflow-visible opacity-90 mix-blend-multiply"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="460"
			height="30"
			viewBox="0 0 460 30"
			fill="none"
			class="h-auto w-full overflow-visible"
		>
			<path
				class=" stroke-theme-400"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width={width}
				d="{startPoint}{startCurve} {endCurve} {endPoint}"
			/>
		</svg>
	</span>
</mark>

<!-- <style>
	span span {
		top: 75%;
	}
</style> -->
