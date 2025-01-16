<script lang="ts">
	let navLinks = [
		{ href: '/#', label: 'HOME', className: 'hidden sm:block' },
		{ href: '/#about', label: 'ABOUT' },
		{ href: '/#buy', label: 'TICKETS' },
		{ href: '/#food', label: 'FOOD' },
		{ href: '/#where', label: 'WHERE' },
		{ href: '/volunteer#help', label: 'VOLUNTEER' }
	]
</script>

<nav class="fixed top-0 z-20 flex h-14 w-full place-content-evenly items-center bg-black text-center">
	{#each navLinks as { href, label, className }}
		<a class="font-poppins block grow px-2 py-4 text-white transition-all hover:bg-[#ccc] hover:text-black {className}" {href}>{label}</a>
	{/each}
</nav>
