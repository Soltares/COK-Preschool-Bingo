<script lang="ts">
	import { contacts } from '$lib'
</script>

<div class="section">
	<h1>QUESTIONS</h1>
	<p>For any questions or concerns, please contact:</p>
	<div class="grid grid-cols-1 md:grid-cols-2 w-full text-lg justify-items-center md:p-5 gap-3">
		{#each contacts as contact}
			<div class="w-80 border p-4 px-10 bg-slate-50">
				<p class="underline">{contact.name}</p>
				<a class="text-bingo-blue" href="mailto:{contact.email}">{contact.email}</a>
				<p>{contact.phone}</p>
			</div>
		{/each}
	</div>
</div>
