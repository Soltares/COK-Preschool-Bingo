<script>
	import { urlDonate } from '$lib'
</script>

<div id="faq" class="section h-full grow">
	<h1>BINGO NIGHT - FAQ</h1>

	<h2>When and where is Bingo Night?</h2>
	<p>Our Bingo Fundraiser will be held on March 20th at Christ Our King Preschool. Doors open prior to gameplay so you can get settled, grab food, and purchase extras before the first game begins.</p>

	<hr />

	<h2>How do I pay for tickets?</h2>

	<p>We offer several convenient payment options:</p>
	<div class="grid grid-cols-[auto_1fr] gap-x-4 items-center">
		<div class="font-bold">In person:</div>
		<div>Cash or check can be dropped off at the church office or given directly to Colleen</div>
		<div class="font-bold">Online:</div>
		<div>
			<a class="text-blue-600 underline" href="/purchase#buy">Tickets</a> and <a class="text-blue-600 underline" href={urlDonate}>donations</a> can be purchased securely through our website
		</div>
	</div>

	<hr />

	<h2>How old do you have to be to play?</h2>
	<p>Players must be <span class="font-bold">18 years or older to participate.</span> This requirement is due to our gambling license and the adult-themed baskets included in the event.</p>

	<hr />

	<h2>What games are included?</h2>

	<p>Your ticket includes 20 regular Bingo games.</p>
	<p>5 special Bingo games will be available for an additional cost and feature larger prizes.</p>

	<hr />

	<h2>Will food be available?</h2>

	<p>Yes! Come hungry 😊</p>
	<div class="grid grid-cols-[auto_1fr] gap-x-4 items-center">
		<div class="font-bold">Food Trucks:</div>
		<div>Vagabond’s Food Truck and Box Hill Pizzeria</div>
		<div class="font-bold">Concessions:</div>
		<div>Desserts and drinks will be available for purchase at our concession stand</div>
	</div>

	<hr />

	<h2>Are there raffles or other games?</h2>

	<p>Absolutely!</p>
	<ul class="list-disc ml-6">
		<li>Basket Raffles</li>
		<li class="font-bold">50/50 raffle</li>
		<li>Additional games and chances to win will be available throughout the night</li>
	</ul>

	<hr />

	<h2>What if I can't attend but still want to support the fundraiser?</h2>

	<p>We'd still love your support!</p>

	<p>
		You can donate online <a class="text-blue-600 underline font-bold" href={urlDonate}>here</a> for anyone who can't attend but would like to contribute.
	</p>

	<hr />

	<h2>How can I help or volunteer?</h2>

	<p>We are always grateful for helping hands! Volunteers are needed to assist with:</p>

	<ul class="list-disc ml-6">
		<li>Registration and check-in</li>
		<li>Selling Bingo cards, special games, and raffle tickets</li>
	</ul>

	<p>
		You can sign-up to volunteer online <a class="text-blue-600 underline font-bold" href="/volunteer#help">here</a>.
	</p>
</div>

<style>
	h2 {
		font-weight: 600;
	}
</style>
