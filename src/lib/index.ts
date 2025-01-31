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
	{ name: 'Liberatore\'s', logoUrl: '/liberatores-logo.png', linkUrl: 'https://www.liberatores.com/bel-air', class: '!rounded-lg px-2 scale-125' },
	{ name: 'Liz Baxter', logoUrl: '/liz-baxter.png' },
]

export let trucks = [
	{ name: 'Man I Love Food', logoUrl: '/milfs.jpg', linkUrl: 'https://milfs-hot-spot.square.site' },
	{ name: 'Dough Slingers', logoUrl: '/dough-slingers-logo.png', linkUrl: 'https://doughslingersfunnelcakes.com', class: 'scale-110' }
]

export let contacts = [
	{ name: 'Rebecca Wood - Bingo Chair', email: 'bingo@christourking.net', phone: '609-213-2310' },
	{ name: 'Colleen Gambril', email: 'colleen@christourking.net', phone: '410-836-0141' }
]
