// place files you want to import through the `$lib` alias in this folder.
export let urlBuyTickets = import.meta.env.VITE_URL_TICKETS
export let urlDonate = import.meta.env.VITE_URL_DONATE

export let sponsors = [
	{ name: 'Christ Our King Presbyterian Church', logoUrl: '/cok-logo.png', linkUrl: 'https://christourking.net/' },
	{ name: 'ReckTech, LLC', logoUrl: '/recktech-logo.png', linkUrl: 'https://recktech.co' },
	{ name: 'Affirmatech Inc', logoUrl: '/affirmatech-logo.jpg', linkUrl: 'https://affirmatech.com' },
	{ name: 'Mr. V Laser Design', logoUrl: '/mr-v-logo.png', linkUrl: 'https://mrvlaserdesign.com/', class: '!rounded-none' },
	{ name: 'Nancy Hines', logoUrl: '/nancyh.png' },
	{ name: 'Chick-fil-A', logoUrl: '/chick-fil-a-logo.jpg', linkUrl: 'https://www.chick-fil-a.com/locations/md/bel-air' },
	{ name: 'Aberdeen IronBirds', logoUrl: '/Aberdeen_IronBirds_logo.svg', linkUrl: 'https://www.milb.com/aberdeen', class: '!rounded-none' },
	{ name: "Klein's ShopRite", logoUrl: '/ShopRite_(United_States)_logo.svg', linkUrl: 'https://kleinsfm.com/locations/shoprite-at-the-festival-at-bel-air/', class: '!rounded-none' },
	// { name: 'Noodles & Company', logoUrl: '/noodlesAndCompany-logo.svg', linkUrl: 'https://locations.noodles.com/md/bel-air/621-bel-air-road' },
	{ name: 'Honeygrow', logoUrl: '/honeygrow-logo.png', linkUrl: 'https://www.honeygrow.com/location/bel-air/', class: '!rounded-none' },
	{ name: 'Saladworks', logoUrl: '/saladworks-logo.png', linkUrl: 'https://restaurants.saladworks.com/md/bel-air/617-bel-air-road/', class: 'scale-110' },
	{ name: 'Horizon Cinemas', logoUrl: '/horizon-cinemas-logo.png', linkUrl: 'https://horizoncinemas.com/home', class: 'bg-black px-2 !rounded' },
	{ name: 'Ice World', logoUrl: '/ice-world-logo.png', linkUrl: 'https://www.iceworld.com/', class: 'scale-150' },
	{ name: 'Longwood Gardens', logoUrl: '/longwood-gardens-logo.jpg', linkUrl: 'https://longwoodgardens.org/', class: '!rounded-lg bg-white px-3' },
	{ name: 'Lean Kitchen', logoUrl: '/lean-kitchen-logo.webp', linkUrl: 'https://www.leankitchenco.com/bel-air/', class: '!rounded-lg' },
	{ name: 'Poke Bowl', logoUrl: '/poke-bowl-logo.svg', linkUrl: 'https://www.belairpokebowl.com/', class: '!rounded-lg px-2' },
	{ name: "Liberatore's", logoUrl: '/liberatores-logo.png', linkUrl: 'https://www.liberatores.com/bel-air', class: '!rounded-lg px-2 scale-125' },
	{ name: 'Liz Baxter', logoUrl: '/liz-baxter.png' },
	{ name: 'Greek Village', logoUrl: '/greek-village-logo.jpg', linkUrl: 'http://greekvillagebelair.com/', class: '!rounded-lg' },
	{ name: 'Bagel Works', logoUrl: '/bagel-works-logo.jpg', linkUrl: 'https://www.facebook.com/15dbiel/', class: '!rounded-lg' },
	{ name: 'Imagine Nail Salon', logoUrl: '/imagine-nail-salon-logo.png', linkUrl: 'https://www.imaginenail.com/', class: '' },
	{ name: 'Greenbrier Wine & Spirits', logoUrl: '/greenbrier-wine-logo.png', linkUrl: 'https://maps.app.goo.gl/ht2tgchNQ29di7sBA', class: '!rounded-lg' },
	{ name: 'Philly Pretzel Factory', logoUrl: '/philly-pretzel-factory-logo.webp', linkUrl: 'https://phillypretzelfactory.com/locations/bel-air-md/', class: '!rounded-lg' },
	{
		name: 'Pizza Hut',
		logoUrl: '/Pizza_Hut_classic_logo.svg.png',
		linkUrl: 'https://locations.pizzahut.com/md/bel-air/1216-churchville-rd?utm_medium=organic&utm_source=local&utm_campaign=googlelistings&utm_content=website&utm_term=299580',
		class: '!rounded-none'
	},
	{ name: 'Pappas', logoUrl: 'pappas-logo.avif', linkUrl: 'https://www.pappasbelair.com/', class: '!rounded-none' },
	{ name: 'Inspired Edge Coaching', logoUrl: '/inspired-edge-logo.png', linkUrl: 'https://inspirededgecoaching.com/', class: '!rounded-none scale-150' },
	{ name: "Chung's Martial Arts", logoUrl: '/chungs-logodark.png', linkUrl: 'https://chungsmartialarts.net/', class: '!rounded-none' }
]

export let trucks = [
	{ name: 'Man I Love Food', logoUrl: '/milfs.jpg', linkUrl: 'https://milfs-hot-spot.square.site' },
	{ name: 'Dough Slingers', logoUrl: '/dough-slingers-logo.png', linkUrl: 'https://doughslingersfunnelcakes.com', class: 'scale-110' }
]

export let contacts = [
	{ name: 'Rebecca Wood - Bingo Chair', email: 'bingo@christourking.net', phone: '609-213-2310' },
	{ name: 'Colleen Gambril', email: 'colleen@christourking.net', phone: '410-836-0141' }
]
