<script lang="ts">
	import { sponsors } from '$lib'
	let enableLinks = $state(false)
	let showURL = $state(false)
	let tableElement: HTMLTableElement

	function copytable(element) {
		var range = document.createRange()
		range.selectNode(element)
		window.getSelection().addRange(range)
		document.execCommand('copy')
	}
</script>

<div class="m-auto p-3 flex flex-col gap-2">
	<div class="flex gap-3">
		<label>
			Enable Links
			<input type="checkbox" bind:checked={enableLinks} />
		</label>
		<label>
			Show URL
			<input type="checkbox" bind:checked={showURL} />
		</label>
		<button class="border rounded px-2 bg-sky-200" onclick={() => copytable(tableElement)}>Copy to clipboard</button>
	</div>

	<table bind:this={tableElement}>
		<thead>
			<tr>
				<th>Sponsor Name</th>
				{#if showURL}
					<th>URL</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each [...sponsors].sort((a, b) => a.name.localeCompare(b.name)) as sponsor}
				<tr class="border-b">
					<td class="whitespace-nowrap">
						{#if enableLinks && sponsor.linkUrl}
							<a class="text-blue-700 underline" href={sponsor.linkUrl}>{sponsor.name}</a>
						{:else}
							{sponsor.name}
						{/if}
					</td>
					{#if showURL}
						<td class="max-w-md">
							{sponsor.linkUrl}
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
