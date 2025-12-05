<script>
	import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from 'svelte-vertical-timeline'

	const options = [
		{ title: 'Food Trucks', time: '5:00 pm' },
		{ title: 'Doors Open', time: '6:00 pm' },
		{ title: 'Games Begin!', time: '7:00 pm' },
	]
</script>

<Timeline position="alternate">
	{#each options as option, index}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p class="font-bold">{option.time}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3>{option.title}</h3>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>
