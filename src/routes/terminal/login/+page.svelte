<script lang="ts">
	import type { ActionData } from './$types'
	export let form: ActionData
</script>

<h1>Login</h1>

<form method="POST" class="flex flex-col gap-2 py-2">
	<label class="flex gap-2">
		<div class="w-24">User</div>
		<!-- svelte-ignore a11y_autofocus -->
		<input autofocus name="user" type="text" class="w-full bg-gray-100 rounded p-1 px-2" />
	</label>
	<label class="flex gap-2">
		<div class="w-24">Password</div>
		<input name="password" type="password" class="w-full bg-gray-100 rounded p-1 px-2" />
	</label>
	<button class="wideBtn">Login</button>
</form>

{#if form && !form.password_correct}
	<p class="text-rose-600 text-center">The provided login is not correct.</p>
{/if}
