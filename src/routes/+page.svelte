<script lang="ts">
	import { contacts, currentSponsors, pastSponsors, trucks, urlDonate } from '$lib'
	import Contact from '$lib/Contact.svelte'
	import SponsorList from '$lib/SponsorList.svelte'
	import SponsorMarquee from '$lib/SponsorMarquee.svelte'
	import Timeline from '$lib/Timeline.svelte'

	let enableTicketSales = import.meta.env.VITE_ENABLE_TICKET_SALES == 1
</script>

{#snippet bingo()}
	<span class="text-bingo-blue font-bold">BINGO</span>
{/snippet}

<!-- Save the Date -->
<div id="about" class="section">
	<h1>
		<span class="font-bold text-bingo-blue underline">SAVE THE DATE</span>
		FOR
		<span class="inline-block"> CHRIST OUR KING PRESCHOOL'S</span>
		<span class="inline-block"> 4<sup>th</sup> ANNUAL {@render bingo()} NIGHT! 🎉</span>
	</h1>
	<p>
		Join us for the biggest fundraiser of the year on Friday, March 20th, 2026—an evening filled with fun, prizes, and community spirit! Food trucks will be ready to serve dinner starting at 5:00 pm,
		so come early to enjoy delicious options before the {@render bingo()} action kicks off at 7:00 pm.
	</p>

	<Timeline />

	<p>
		Your ticket includes {@render bingo()} boards for all 20 games, each offering the chance to win fantastic basket prizes valued at over $100—some even higher! You can also try your luck with raffle and
		50/50 tickets available for purchase throughout the night, along with additional games to keep the excitement going.
	</p>

	<p>
		Don't miss this wonderful opportunity to have a great time, win amazing prizes, and support our preschool students. Mark your calendars, bring your friends, and let's make it a night to remember!
	</p>

	<div class="m-auto w-full border p-5 sm:px-8 flex flex-col gap-2 bg-slate-100 text-lg justify-items-center">
		<div class="m-auto">
			<p>📅 Date: Friday, March 20th</p>
			<p>
				📍 <a href="https://maps.app.goo.gl/6oiRYDuMY6NwXdXH8" class="underline text-bingo-blue" target="_blank" rel="noopener noreferrer"> Location: 10 Lexington Avenue, Bel Air </a>
			</p>
			<p>🎟️ Prizes, raffles, food trucks, and so much more!</p>
		</div>
	</div>

	<a href="/faq#faq" class="wideBtn">FREQUENTLY ASKED QUESTIONS</a>
</div>

<!-- Buy Tickets -->
<div id="tickets" class="section">
	<h1>🎟️ BUY TICKETS</h1>
	<p>
		Join us for Christ Our King's Preschool 4th Annual {@render bingo()} Night! {#if enableTicketSales}Tickets are <span class="font-bold">$30</span> each if purchased in advance, with multiple payment
			options available. You can pay by cash (drop off to Colleen Gambril or the church office), by check (made payable to Christ Our King Preschool), or conveniently through our website for an additional
			service fee per transaction.{/if} Tickets bought online will still be eligible for raffle prizes as you can claim your physical ticket at the door. {#if !enableTicketSales}Online tickets are
			currently sold out, but if you are interested in purchasing tickets before the event, please contact <a class="text-bingo-blue" href="mailto:{contacts[0].email}">{contacts[0].name}.</a>{/if}
	</p>
	<p>
		Tickets on {@render bingo()} day will be available at the door for <span class="font-bold">$35</span> until all seats are filled. Tickets will go fast and all sales are final! We are unable to accomodate
		refunds and appreciate your understanding.
	</p>

	<p>
		Come prepared with cash for the event, as there will be plenty of extras for sale, including {@render bingo()}
		stamps, sodas, water, and delicious baked goods. Plus, don't miss out on our exciting raffles and 50/50 game for more chances to win! We can't wait to see you there for an unforgettable night of
		{@render bingo()} and fun!
	</p>

	<!-- <p class="font-bold">Due to unprecedented demand, we can no longer offer purchase of tickets at the door. Thank you for your understanding.</p>  -->
	{#if enableTicketSales}
		<a href="/purchase#buy" class="wideBtn">BUY TICKETS</a>
	{:else}
		<a href="#questions" class="wideBtn">
			<p class="font-bold text-xl">Online tickets are sold out!</p>
			<p>Please send ticket requests to {contacts[0]?.email}</p>
		</a>
	{/if}
</div>

<div id="food" class="section">
	<h1>COME HUNGRY, LEAVE HAPPY</h1>
	<p>
		<span class="font-bold">Food Trucks:</span>
		Join us for a delicious start to {@render bingo()} Night with food trucks available from 5:00 pm onwards! Arrive early to explore a variety of tasty dinner options while supporting Christ Our King Preschool,
		as a portion of each purchase goes directly to benefit our school. Even if you can't stay for {@render bingo()}, bring the whole family to enjoy a meal and let the kids play on the playground --
		no ticket required! It's a wonderful chance to connect with our preschool, church, and neighborhood families over a delicious meal. Don't miss this community gathering for a great cause—see you
		there!
	</p>
	<SponsorList list={trucks} />
	<p>
		<span class="font-bold">Bake Sale:</span>
		For those on the {@render bingo()} floor, delectable baked goods will be available for purchase to satisfy your sweet tooth!
	</p>
</div>

<!-- Contact/Area Container -->
<div id="where" class="section">
	<h1>WHERE TO FIND US</h1>
	<p>Christ Our King Preschool is located in Christ Our King Presbyterian Church across from Ring Factory Elementary on 924 Emmorton Rd.</p>
	<!-- Google Map -->
	<iframe
		class="h-[30rem]"
		title="Google Map of Christ Our King Preschool"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.4762733053441!2d-76.33174423139877!3d39.51685001608796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7dd9709952847%3A0xb91a566a913869e4!2sChrist%20Our%20King%20Presbyterian!5e0!3m2!1sen!2sus!4v1732373472074!5m2!1sen!2sus"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>

	<p class="font-bold mt-4">About Christ Our King Preschool</p>
	<p>
		Christ Our King Preschool is a small, private, Christian preschool located in the heart of Bel Air, Maryland. We've been educating Harford County's children since 1973 when a group of church
		members undertook the lofty goal of creating a preschool in a rapidly growing community. We believe in high-quality education across all disciplines including the arts. Children learn literacy,
		mathematics, science and social studies through direct instruction and independent exploration. Art, music, dramatic play and sensory experiences are incorporated into all lessons.
	</p>
	<p>
		Christ Our King Preschool is registered with Maryland State Department of Education (MSDE) as a non-public church preschool. We hold a Letter of Compliance (LOC) from the Office of Child Care
		which is under the auspices of the Maryland State Department of Education (MSDE). All staff members are CPR/First Aid certified and have passed a thorough background review including
		fingerprinting and a criminal background check.
	</p>
	<a href="https://christourkingpreschool.com" target="_blank" rel="noopener noreferrer" class="underline text-bingo-blue">Click here to learn more!</a>
</div>

<div class="section">
	<h1>SPONSORS</h1>
	<p>
		A heartfelt thank you to our sponsors for their generous support. Their contributions help Christ Our King Preschool provide memorable experiences, valuable resources, and enriching opportunities
		for our students.
	</p>
	<SponsorList list={currentSponsors} maxColumns={4} />

	<h1>PAST SPONSORS</h1>
	<SponsorMarquee list={pastSponsors} />
</div>

<div class="section">
	<h1>VOLUNTEERS</h1>
	<p>Interested in volunteering? <a class="text-bingo-blue underline" href="/volunteer#help">Click here</a> for more information!</p>
	<p>Want to help sponsor? A direct donation is greatly appreciated. Use the button below to support our cause!</p>
	<a href={urlDonate} class="wideBtn"> DONATE NOW </a>
</div>

<Contact />
