<script lang="ts">
	import { beforeNavigate } from '$app/navigation'
	import { formatCents, itemIndex, items } from '$lib'
	import Checkout from '$lib/Checkout.svelte'
	import { onMount } from 'svelte'

	let agreeAdults = $state(false)
	let review = $state(false)
	const cart: Record<string, number> = $state({})
	onMount(() => items.forEach((item) => (cart[item.name] = 0)))

	function onsubmit(e: SubmitEvent) {
		e.preventDefault()
		review = true
	}

	beforeNavigate((e) => {
		if (review && e.type == 'popstate') {
			review = false
			e.cancel() // Back button return to products
		}
	})
</script>

<div id="buy" class="section h-full grow">
	<h1>PURCHASE TICKETS AND GOODIES</h1>

	{#if !agreeAdults}
		<!-- Accept 18+ ? -->
		<p>Due to the nature of this event, participants are required to be of <span class="font-bold"> 18 years of age or older.</span></p>
		<img alt="Adults Only BINGO Fun!" class="max-w-xs mx-auto rounded-full shadow-md shadow-black/50" src="AdultsOnlyBingo512.png" />
		<button onclick={() => (agreeAdults = true)} class="wideBtn">Agree and continue</button>
	{:else if !review}
		<!-- Product Catalog -->
		<form {onsubmit} class="space-y-6">
			{#each items as item}
				<div class="flex items-center justify-between border-b pb-4 gap-4">
					<div>
						<label for="bingo-ticket-qty" class="text-xl font-semibold text-gray-900 block">{item.name} - {formatCents(item.priceCents)}</label>
						<p class="text-sm text-gray-500 mt-1">{item.description}</p>
					</div>
					<div class="flex items-center space-x-2">
						<button
							type="button"
							onclick={() => (cart[item.name] = Math.max(cart[item.name] - 1, 0))}
							class="w-8 h-8 flex items-center justify-center text-xl border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition duration-150"
						>
							-
						</button>
						<input type="number" pattern="[0-9]*" min="0" bind:value={cart[item.name]} class="w-12 text-center text-lg font-medium border-0 focus:ring-0 p-0" />
						<button
							type="button"
							onclick={() => (cart[item.name] += 1)}
							class="w-8 h-8 flex items-center justify-center text-xl border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition duration-150"
						>
							+
						</button>
					</div>
				</div>
			{/each}
			<!-- Continue to Review -->
			<div class="mt-8 pt-4">
				<button type="submit" disabled={Object.values(cart).every((v) => v == 0)} class="wideBtn w-full py-3 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					Continue</button
				>
			</div>
		</form>
	{:else}
		<!-- Review Selected Items -->
		<div class="flex flex-col gap-4">
			<div class="flex gap-2">
				<div class="grow text-red-800 font-bold">
					{#if !cart['Bingo Entry Ticket']}
						No entry tickets were added to the cart. Please be aware that you will not be able to play BINGO without having purchased a Bingo Entry Ticket.
					{/if}
				</div>
				<button class="wideBtn !w-32 !text-sm !p-2 !px-4" onclick={() => history.back()}>Adjust Items</button>
			</div>
			<div>
				<Checkout {cart} />
			</div>
		</div>
	{/if}
</div>

<style>
	/* For Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* For Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
