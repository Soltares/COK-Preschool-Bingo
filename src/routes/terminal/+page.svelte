<script lang="ts">
	import { onMount } from 'svelte'
	import { formatCents, items } from '$lib'

	let terminal: any
	const cart: Record<string, number> = $state({})
	const simulated = true
	let discoveredReaders = $state([])
	let connected = $state(false)
	let status = $state('Select reader to connect')

	async function onFetchConnectionToken() {
		console.log('onFetchConnectionToken')
		// Do not cache or hardcode the ConnectionToken. The SDK manages the ConnectionToken's lifecycle.
		const response = await fetch('/terminal/connection_token', { method: 'POST' })
		const data = await response.json()
		return data.secret
	}

	function onUnexpectedReaderDisconnect() {
		// In this function, your app should notify the user that the reader disconnected.
		// You can also include a way to attempt to reconnect to a reader.
		console.log('Disconnected from reader')
		connected = false
	}

	async function discoverReaders() {
		const config = { simulated }
		const discoverResult = await terminal.discoverReaders(config)
		if (discoverResult.error) {
			console.log('Failed to discover: ', discoverResult.error)
		} else if (discoverResult.discoveredReaders.length === 0) {
			console.log('No available readers.')
		} else {
			discoveredReaders = discoverResult.discoveredReaders
		}
	}

	async function connectReader(id: string) {
		let reader = discoveredReaders.find((r) => r.id == id)
		if (!reader) return
		status = `Connecting to ${id}`
		await terminal.disconnectReader()
		try {
			const connectResult = await terminal.connectReader(reader)
			if (connectResult.error) console.error(connectResult.error)
			status = connectResult.error?.message ?? connectResult.reader.label
			if (connectResult.reader.label) {
				connected = true
			}
		} catch (e) {
			status = String(e)
			console.log(e)
		}
	}

	onMount(() => {
		terminal = window['StripeTerminal']?.create({
			onFetchConnectionToken,
			onUnexpectedReaderDisconnect,
		})
		window['terminal'] = terminal
		discoverReaders()
		items.forEach((item) => (cart[item.name] = 0))
	})
	function onsubmit(e: SubmitEvent) {
		e.preventDefault()
	}
</script>

<svelte:head>
	<script src="https://js.stripe.com/terminal/v1/"></script>
</svelte:head>

<div id="header" class="flex place-content-between h-20">
	<div class="font-bold">Stripe Terminal</div>
	<div class="text-sm opacity-70">{status}</div>
	<a class="text-bingo-blue underline opa" href="/terminal/logout">Logout</a>
</div>

{#if !connected}
	<div class="flex flex-col h-full">
		<div class="grid grid-cols-[auto,auto,auto,auto,auto] gap-2 overflow-auto">
			<div class="font-bold border-b">ID</div>
			<div class="font-bold border-b">Label</div>
			<div class="font-bold border-b">IP</div>
			<div class="font-bold border-b">Location</div>
			<div class="font-bold border-b">Status</div>
			{#each discoveredReaders as reader}
				<button class="text-blue-600 underline text-left" onclick={() => connectReader(reader.id)}>{reader.id}</button>
				<div>{reader.label}</div>
				<div>{reader.ip_address}</div>
				<div>{reader.location}</div>
				<div>{reader.status}</div>
			{/each}
		</div>
		<button onclick={() => discoverReaders()} class="wideBtn mt-auto">Refresh</button>
	</div>
{/if}

<form {onsubmit} class="my-2 space-y-6 {!connected ? 'hidden' : ''} overflow-auto flex flex-col h-full">
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
</form>

{#if connected}
	<button class="wideBtn">Submit</button>
{/if}

<style>
	:global(#layoutBody) {
		height: 100%;
	}
</style>
