<script lang="ts">
	export let invoice: any

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(amount)
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
						{formatCurrency(item.price)}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right font-semibold">
						{item.count}
					</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-bold">
						{formatCurrency(item.total)}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- <div class="mt-6 flex justify-end">
	<div class="w-full max-w-xs space-y-2">
		<div class="flex justify-between border-t pt-2">
			<span class="text-gray-700">Subtotal:</span>
			<span class="font-medium text-gray-900">{formatCurrency(subtotal)}</span>
		</div>
		<div class="flex justify-between">
			<span class="text-gray-700">Tax ({taxRate * 100}%):</span>
			<span class="font-medium text-gray-900">{formatCurrency(taxAmount)}</span>
		</div>
		<div class="flex justify-between border-t-2 border-indigo-600 pt-3">
			<span class="text-xl font-bold text-gray-900">Grand Total:</span>
			<span class="text-xl font-bold text-indigo-600">{formatCurrency(grandTotal)}</span>
		</div>
	</div>
</div> -->

<div class="mt-8">
	<button class="wideBtn w-full py-3 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Confirm Purchase</button>
</div>
