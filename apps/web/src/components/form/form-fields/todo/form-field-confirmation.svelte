<script lang="ts">
</script>

<div class="sm:col-span-2">
	<div class="flex items-start">
		<div class="flex-shrink-0">
			<!-- Enabled: "bg-green-600", Not Enabled: "bg-mono-200" -->
			<button
				type="button"
				class="bg-mono-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
				role="switch"
				aria-checked="false"
			>
				<span class="sr-only">Agree to policies</span>
				<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
				<span
					aria-hidden="true"
					class="inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
				/>
			</button>
		</div>
		<div class="ml-3">
			<p class="text-mono-500 text-base">
				By selecting this, you agree to the
				<a href="#" class="text-mono-700 font-medium underline">Privacy Policy</a>
				and
				<a href="#" class="text-mono-700 font-medium underline">Cookie Policy</a>.
			</p>
		</div>
	</div>
</div>
