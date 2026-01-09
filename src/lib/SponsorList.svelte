<script lang="ts">
	type Props = {
		/** List of sponsors */
		list: { name: string; logoUrl?: string; linkUrl?: string; class?: string }[]

		/** Max columns per row (default 3) */
		maxColumns?: number
	}

	let { list, maxColumns = 3 }: Props = $props()
	let gridCols = ['sm:grid-cols-1 md:grid-cols-1', 'sm:grid-cols-2 md:grid-cols-2', 'sm:grid-cols-2 lg:grid-cols-3']
</script>

<div class="grid grid-cols-1 {gridCols[Math.min(list.length, maxColumns) - 1]} w-full text-lg gap-6 py-3">
	{#each list as sponsor}
		<svelte:element
			this={sponsor.linkUrl ? 'a' : 'div'}
			href={sponsor.linkUrl ?? '#'}
			target="_blank"
			rel="noopener noreferrer"
			class="border w-60 h-full m-auto p-4 bg-slate-50 hover:scale-110 transition-all hover:border-bingo-blue hover:ring ring-bingo-blue text-center flex flex-col items-center justify-center gap-3 min-h-44 select-none"
		>
			{#if sponsor.logoUrl}
				<img src={sponsor.logoUrl} alt={sponsor.name + ' logo'} class="max-h-24 max-w-40 object-contain rounded-full {sponsor.class} m-auto grow" />
			{/if}
			<h3 class="font-semibold text-lg mb-1">{sponsor.name}</h3>
		</svelte:element>
	{/each}
</div>
