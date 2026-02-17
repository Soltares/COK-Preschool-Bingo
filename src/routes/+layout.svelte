<script lang="ts">
	import { page } from '$app/stores'
	import Footer from '$lib/Footer.svelte'
	import Hero from '$lib/Hero.svelte'
	import NavBar from '$lib/NavBar.svelte'
	import '../app.css'
	let { children } = $props()
</script>

{#if !$page.url.pathname.startsWith('/terminal')}
	<NavBar />
{/if}
<div class="h-full flex flex-col">
	{#if $page.url.pathname == '/'}
		<Hero />
	{/if}
	<div class="container m-auto px-5 xl:px-44 lg:px-20 grow pb-16 flex flex-col">
		{@render children()}
	</div>
	{#if !$page.url.pathname.startsWith('/terminal')}
		<Footer />
	{/if}
</div>
