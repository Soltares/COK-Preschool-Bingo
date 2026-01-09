<script>
	import { onMount } from 'svelte'

	export let list = []
	let container
	let scrollInterval

	const startAutoScroll = () => {
		scrollInterval = setInterval(() => {
			if (!container) return

			const cardWidth = container.firstChild.offsetWidth // Width + gap
			const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 10

			if (isAtEnd) {
				container.scrollTo({ left: 0, behavior: 'smooth' })
			} else {
				container.scrollBy({ left: cardWidth, behavior: 'smooth' })
			}
		}, 2000)
	}

	onMount(() => {
		startAutoScroll()
		return () => clearInterval(scrollInterval)
	})

	const stopScroll = () => clearInterval(scrollInterval)
	const resumeScroll = () => startAutoScroll()
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={container}
	on:mouseenter={stopScroll}
	on:mouseleave={resumeScroll}
	class="flex overflow-x-auto snap-x snap-mandatory gap-6 py-6 no-scrollbar"
	style="scrollbar-width: none; -ms-overflow-style: none;"
>
	{#each list as sponsor}
		<div class="snap-center shrink-0">
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
		</div>
	{/each}
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
