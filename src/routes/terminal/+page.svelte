<script lang="ts">
	import { onMount } from 'svelte'
	import { formatCents, items, type InvoiceItem } from '$lib'
	import Checkout from '$lib/Checkout.svelte'

	let terminal: any
	const simulated = false
	let cart: Record<string, number> = $state({})
	let discoveredReaders = $state([])
	let view = $state<'terminals' | 'products' | 'checkout' | 'payment'>('terminals')
	let status = $state('')
	let email = $state('')
	let writeIn = $state('')
	let writeInAmount = $state<number>()
	let paymentIntent = $state<any>()

	function resetCart() {
		email = ''
		writeIn = ''
		writeInAmount = undefined
		items.forEach((item) => (cart[item.name] = 0))
		paymentIntent = undefined
	}

	async function onFetchConnectionToken() {
		// Do not cache or hardcode the ConnectionToken. The SDK manages the ConnectionToken's lifecycle.
		const response = await fetch('/terminal/connection_token', { method: 'POST' })
		const data = await response.json()
		return data.secret
	}

	function onUnexpectedReaderDisconnect() {
		// In this function, your app should notify the user that the reader disconnected.
		// You can also include a way to attempt to reconnect to a reader.
		console.log('Disconnected from reader')
		status = 'Disconnected from reader'
		view = 'terminals'
	}

	async function discoverReaders() {
		const config = { simulated }
		status = 'Searching for readers'
		const discoverResult = await terminal.discoverReaders(config)
		if (discoverResult.error) {
			console.log('Failed to discover: ', discoverResult.error)
			status = discoverResult.error
		} else if (discoverResult.discoveredReaders.length === 0) {
			status = 'No available readers'
			console.log('No available readers')
		} else {
			status = 'Select reader to connect'
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
			status = connectResult.error?.message ?? connectResult.reader?.label
			if (connectResult.reader?.label) {
				view = 'products'
			}
		} catch (e) {
			status = String(e)
			console.log(e)
		}
	}

	async function collectPayment(invoice: InvoiceItem[], amount: number) {
		if (amount < 50) {
			status = 'Cannot create a transaction less than $0.50'
			return
		}

		status = `Creating $${(amount / 100).toFixed(2)} transaction`
		const description = invoice.map((item) => `${item.name} (${item.count} x ${formatCents(item.priceCents)})`).join(', ')

		const response = await fetch('/terminal/create_payment_intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ amount, email, description }),
		})

		paymentIntent = await response.json()

		if (typeof paymentIntent == 'string') {
			status = paymentIntent
			throw paymentIntent
		}

		view = 'payment'

		const paymentMethodResult = await terminal.collectPaymentMethod(paymentIntent.client_secret, {
			config_override: { enable_customer_cancellation: true },
		})

		if (paymentMethodResult.error) {
			status = 'Transaction Failed'
			view = 'products'
		} else {
			console.log('terminal.collectPaymentMethod', paymentMethodResult.paymentIntent)
			status = `Processing $${amount} payment`
			let processPaymentResult = await terminal.processPayment(paymentMethodResult.paymentIntent)
			if (processPaymentResult.error) {
				console.error(processPaymentResult.error)
				status = processPaymentResult.error?.message
				view = 'products'
			} else if (processPaymentResult.paymentIntent) {
				const captureResult = await fetch('/terminal/capture_payment_intent', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ id: paymentIntent.id }),
				})

				const data = await captureResult.json()
				console.log('captureResult', data)

				status = `Transaction: ${data?.status}`
				view = 'products'
			}
		}
	}

	onMount(() => {
		terminal = window['StripeTerminal']?.create({
			onFetchConnectionToken,
			onUnexpectedReaderDisconnect,
		})
		window['terminal'] = terminal
		discoverReaders()
		resetCart()
	})
	function onsubmit(e: SubmitEvent) {
		e.preventDefault()
	}
</script>

<svelte:head>
	<script src="https://js.stripe.com/terminal/v1/"></script>
</svelte:head>

<div id="header" class="flex place-content-between items-center mb-6 gap-4">
	<div class="font-bold">Stripe Terminal</div>
	<div class="text-sm opacity-70">{status}</div>
	<div class="flex gap-4 items-center">
		<a class="wideBtn w-fit !text-sm !p-2 !px-4 ml-auto mb-3 active:bg-yellow-400" href="/terminal/logout">Logout</a>
		<button class="wideBtn w-fit !text-sm !p-2 !px-4 ml-auto mb-3 active:bg-yellow-400" onclick={resetCart}>Reset</button>
	</div>
</div>
{#if view == 'terminals'}
	<!-- <div>{JSON.stringify(discoveredReaders, undefined, 2)}</div> -->
	<div class="grid grid-cols-[auto,auto] gap-4 overflow-auto items-center">
		<div class="font-bold border-b">Label</div>
		<div class="font-bold border-b">DNS</div>
		<!-- <div class="font-bold border-b">Status</div> -->
		{#each discoveredReaders as reader}
			<button class="text-blue-600 underline text-left" onclick={() => connectReader(reader.id)}>{reader.label}</button>
			<div class="text-sm">{reader.ip_address} {reader.ip_address.replaceAll('.', '-')}.{reader.base_url}</div>
			<!-- <div>{reader.status}</div> -->
		{/each}
	</div>
	<button onclick={() => discoverReaders()} class="wideBtn mt-auto">Refresh</button>
{/if}

{#if view == 'products'}
	<form {onsubmit} class="my-2 space-y-6 overflow-auto flex flex-col h-full">
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
	<div id="extraDetails" class="py-2 flex flex-col gap-2">
		<input type="text" class="w-full bg-gray-100 rounded p-1 px-2" bind:value={email} placeholder="Email" />
		<div class="flex gap-2 items-center">
			<input type="text" class="w-full bg-gray-100 rounded p-1 px-2" bind:value={writeIn} placeholder="WriteIn" />
			<div class="relative">
				<input type="number" class="w-full bg-gray-100 rounded p-1 px-2 pl-6" bind:value={writeInAmount} placeholder="Amount" />
				<div class="absolute left-2 top-1 opacity-60 select-none">$</div>
			</div>
		</div>
	</div>
	<button class="wideBtn" onclick={() => (view = 'checkout')}>Submit</button>
{/if}

{#if view == 'checkout'}
	<Checkout {cart} onCancel={() => (view = 'products')} onCheckout={collectPayment} writeIn={{ label: writeIn, price: writeInAmount * 100 }} />
{/if}

{#if view == 'payment'}
	<div class="flex flex-col gap-3">
		<div>
			Awaiting payment of ${paymentIntent?.amount / 100} for:
		</div>
		<div class="font-bold">
			{paymentIntent?.description}
		</div>
		<button
			class="wideBtn"
			onclick={async () => {
				const response = await fetch('/terminal/cancel_payment_intent', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ id: paymentIntent?.id }),
				})
				await terminal.cancelCollectPaymentMethod()
				paymentIntent = undefined
				view = 'products'
				status = 'Payment Canceled'
			}}>Cancel</button
		>
	</div>
{/if}

<style>
	:global(#layoutBody) {
		height: 100%;
	}
</style>
