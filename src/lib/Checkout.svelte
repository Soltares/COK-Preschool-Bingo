<script lang="ts">
	import { formatCents, itemIndex, type InvoiceItem, type Item } from '$lib'

	type Props = { cart: Record<string, number> }
	const props: Props = $props()

	export const invoice: InvoiceItem[] = Object.entries(props.cart)
		.map(([name, count]) => ({ name, count, priceCents: itemIndex[name].priceCents, description: itemIndex[name].description }))
		.filter((item) => item.count)

	const sum = (numbers: number[]) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

	let subtotal = sum(invoice.map((item) => item.priceCents * item.count))
	let fee = Math.ceil(subtotal * 0.03 + 30) // Actual is 0.029, but this accounts for the "fee on the fee" increase
	let total = fee + subtotal

	invoice.push({ name: 'Online Service Fee', count: 1, priceCents: fee })

	async function beginCheckout() {
		const response = await fetch('/stripe/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(invoice),
		})

		const { url } = await response.json()
		if (url) {
			// Redirect the user to Stripe
			window.location.href = url
		}
	}
</script>

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-indigo-50">
			<tr>
				<th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> Item </th>
				<th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider"> Price </th>
				<th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider"> Quantity </th>
				<th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider"> Total </th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each invoice as item, index (item.name)}
				<tr class:bg-gray-50={index % 2 !== 0}>
					<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
						{item.name}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
						{formatCents(item.priceCents)}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right font-semibold">
						{item.count}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-bold">
						{formatCents(item.priceCents * item.count)}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="mt-6 flex justify-end">
	<div class="w-full max-w-xs space-y-2">
		<div class="flex justify-between border-t-2 border-bingo-blue pt-3">
			<span class="text-xl font-bold text-gray-900">Total:</span>
			<span class="text-xl font-bold text-bingo-blue">{formatCents(total)}</span>
		</div>
	</div>
</div>

<div class="mt-8">
	<button onclick={() => beginCheckout()} class="wideBtn w-full py-3 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Checkout</button>
</div>
