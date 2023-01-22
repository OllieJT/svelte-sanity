<script lang="ts">
	export let min: number;
</script>

<div
	class:sm:grid-cols-2={min >= 2}
	class:md:grid-cols-3={min >= 3}
	class:lg:grid-cols-4={min >= 4}
	class="flex flex-row flex-wrap items-stretch justify-center {$$props.class}"
>
	<slot />
</div>

<!-- samples -->

<!--
<div
	class:sm:grid-cols-2={min >= 2}
	class:md:grid-cols-3={min >= 3}
	class:lg:grid-cols-4={min >= 4}
	class="{$$props.class} grid auto-cols-fr auto-rows-fr grid-cols-1"
>
	<slot />
</div>
 -->
