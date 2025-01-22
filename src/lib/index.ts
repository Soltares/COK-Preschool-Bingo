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
	{ name: 'Aberdeen IronBirds', logoUrl: '/Aberdeen_IronBirds_logo.svg', linkUrl: 'https://www.milb.com/aberdeen', class: '!rounded-none' }
]

export let trucks = [
	{ name: 'Man I Love Food', logoUrl: '/milfs.jpg', linkUrl: 'https://milfs-hot-spot.square.site' },
	{ name: 'Dough Slingers', logoUrl: '/dough-slingers-logo.png', linkUrl: 'https://doughslingersfunnelcakes.com', class: 'scale-110' }
]

export let contacts = [
	{ name: 'Rebecca Wood - Bingo Chair', email: 'bingo@christourking.net', phone: '609-213-2310' },
	{ name: 'Colleen Gambril', email: 'colleen@christourking.net', phone: '410-836-0141' }
]
