<script lang="ts">
	let { urlBuyTickets = import.meta.env.VITE_URL_TICKETS, enableTicketSales = import.meta.env.VITE_ENABLE_TICKET_SALES == 1 } = $props()
</script>

<!-- Header with image -->
<header class="banner grid grid-rows-[auto_1fr_auto] text-center relative items-center" id="home">
	<img class="m-auto z-10 h-[100px] sm:[h-100px] md:h-[125px] bg-white rounded-full mt-5 pointer-events-none" src="logo.png" alt="Logo" />
	<div class="banner-text text-[60px] md:text-[90px] text-white z-10 mx-3 md:mx-10 select-none mb-4">BASKET BINGO NIGHT!</div>
	<div class:visible={enableTicketSales} class="min-h-40 md:min-h-32 z-10 invisible">
		<a href={urlBuyTickets} class="block w-40 font-semibold m-auto hover:black z-10 border bg-bingo-blue text-white px-6 py-3 hover:bg-bingo-green transition-all hover:scale-110 cursor-pointer">
			BUY TICKETS
		</a>
	</div>

	<!-- Background Images -->
	<div class="absolute flex flex-col w-full h-full z-[1] pointer-events-none select-none">
		<div class="relative h-full">
			<img src="balls.png" alt="" class="h-[120px] md:h-[150px] xl:h-[200px] absolute top-0" />
			<img src="balls.png" alt="" class="h-[120px] md:h-[150px] xl:h-[200px] absolute top-0 right-0" />
			<img src="bingo.png" alt="" class="h-[100px] md:h-[150px] xl:h-[200px] absolute bottom-0" />
			<img src="bingo_rev.png" alt="" class="h-[100px] md:h-[150px] xl:h-[200px] absolute bottom-0 right-0" />
		</div>
	</div>
</header>
