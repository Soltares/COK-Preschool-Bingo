<script lang="ts">
	let navLinks = [
		{ href: '/#', label: 'HOME' },
		{ href: '/#about', label: 'ABOUT' },
		{ href: '/#buy', label: 'TICKETS' },
		{ href: '/#food', label: 'FOOD' },
		{ href: '/#where', label: 'WHERE' }
	]
</script>

<nav class="fixed top-0 z-20 flex h-14 w-full place-content-evenly items-center bg-black text-center">
	{#each navLinks as { href, label }}
		<a class="font-poppins block grow px-2 py-4 text-white transition-all hover:bg-[#ccc] hover:text-black" {href}>{label}</a>
	{/each}
</nav>
