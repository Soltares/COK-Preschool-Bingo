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
	{ name: 'Poke Bowl Bel Air', logoUrl: '/poke-bowl-logo.svg', linkUrl: 'https://www.belairpokebowl.com/', class: '!rounded-lg px-2' },
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
	{ name: "Chung's Martial Arts", logoUrl: '/chungs-logodark.png', linkUrl: 'https://chungsmartialarts.net/', class: '!rounded-none' },
	{ name: 'Jones Junction', logoUrl: '/jones-junction-logo.avif', linkUrl: 'https://www.jonesjunction.com/', class: '!rounded-none' },
	{ name: 'Harford Communitiy College', logoUrl: '/hcc-logo.png', linkUrl: 'https://www.harford.edu/', class: '!rounded-lg bg-blue-950 px-2' },
	{ name: 'Riverside Pub & Grille', logoUrl: '/the-pub-logo.png', linkUrl: 'https://riversidepubngrille.com/', class: '!rounded-lg bg-black p-2 scale-110' },
	{ name: 'Enotria', logoUrl: '/enotria-logo.webp', linkUrl: 'https://enotriarestaurant.com/', class: '!rounded-none' },
	{ name: 'Ferguson Golf Institute', logoUrl: '/fgi-logo.avif', linkUrl: 'https://www.fgigolf.com/', class: '!rounded-none scale-125' },

	{ name: 'Buontempo Brothers', logoUrl: '/buontempo-bros-logo.webp', linkUrl: 'https://www.buontempos.com/', class: '!rounded-none scale-125' },
	{ name: 'Independent Brewing Company', logoUrl: '/independent-brewing-co-logo.png', linkUrl: 'https://www.independentbrew.com/', class: '!rounded-none' },
	{ name: 'The Mannequin on Main', logoUrl: '/mannequin-on-main-logo.jpg', linkUrl: 'https://www.facebook.com/p/The-Mannequin-on-Main-100063787592471/', class: 'scale-125' },
	{ name: 'Ladew Topiary Gardens', logoUrl: '/ladew-gardens-logo.png', linkUrl: 'https://ladewgardens.com/', class: '!rounded-lg bg-[rgb(98,_136,_63)] px-2' },
	{ name: 'Baltimore Symphony Orchestra', logoUrl: '/bso-logo.png', linkUrl: 'https://www.bsomusic.org/', class: '!rounded-lg bg-[rgb(0,_30,_69)] p-2' },
	{ name: 'Vagabond Sandwich Company', logoUrl: '/vagabond-sandwich-logo.png', linkUrl: 'https://vagabondsandwichcompany.com/', class: '!rounded-none' },
	{ name: 'Newberry', logoUrl: '/newberry-logo.png', linkUrl: 'https://newberrydonuts.com/', class: '!rounded-none' },
	{ name: 'Wegmans', logoUrl: '/wegmans-logo.min.svg', linkUrl: 'https://www.wegmans.com/stores/bel-air-md/', clfss: '!rounded-none' },
	{ name: 'Mission BBQ', logoUrl: '/mission-bbq-logo.png', linkUrl: 'https://mission-bbq.com/', class: '!rounded-none scale-110' },

	{ name: 'India Garden', logoUrl: '/india-garden-logo.webp', linkUrl: 'https://www.indiagardenus.com/', class: '!rounded-none scale-125' },
	{ name: 'Target', logoUrl: '/target-logo.png', linkUrl: 'https://www.target.com/', class: '!rounded-none' },
	{ name: 'Friendship Wine & Liquor', logoUrl: '/friendship-wine-and-liquor.jpg', linkUrl: 'https://www.friendshipwine.com/', class: 'scale-125' },
	{ name: 'Prigel Family Creamery', logoUrl: '/prigel-family-farm-logo.avif', linkUrl: 'https://www.prigelfamilycreamery.com/', class: 'scale-125' },
	{ name: 'Happy Nails & Spa', logoUrl: '/happy-nails-and-spa-logo.png', linkUrl: 'https://happynailsspabelair.com/', class: 'scale-110 !rounded-lg bg-black px-3' },
	{ name: 'Pairings Bistro & Village Market', logoUrl: '/Pairings-logo.webp', linkUrl: 'https://pairingsbistro.com/market-cafe/', class: '!rounded-lg scale-110' },
	{ name: "Redner's", logoUrl: '/redners-logo.webp', linkUrl: 'https://www.rednersmarkets.com/', class: '!rounded-none scale-125' },
	{ name: 'KIDS FIRST Swim Schools', logoUrl: '/kids-first-logo.png', linkUrl: 'https://kidsfirstswimschools.com/locations/belair/', class: '!rounded-none scale-110' },
	{ name: 'Glamour Nails & Spa', logoUrl: '/glamour-nails-logo.png', linkUrl: 'https://glamournailsbelair.com/', class: '!rounded-lg bg-[#232323] py-1 px-4 scale-110' },
	{ name: 'Lauren Merryman Massage Practitioner', logoUrl: '/lauren-merryman-logo.jpg', linkUrl: 'https://www.facebook.com/lmerrymanRMP/', class: 'scale-110' },
	{ name: 'Box Hill Pizzeria & Crabcakes', logoUrl: '/Box-Hill-Pizzeria-Logo.png', linkUrl: 'https://www.boxhillpizzarestaurant.com/', class: '!rounded-none scale-110' },
	{ name: 'The Last Toy Store', logoUrl: '/the-last-toy-store-logo.png', linkUrl: 'https://thelasttoystore.com/', class: '!rounded-none scale-110' },
	{ name: 'Poke Bowl Abingdon', logoUrl: '/poke-bowl-abingdon-logo.png', linkUrl: 'https://pokebowlabingdon.com/', class: '!rounded-none scale-110' },
	{ name: 'BACCO Italian + Wine Bar', logoUrl: '/bacco-logo.png', linkUrl: 'https://www.baccoitalianwinebar.com/', class: '!rounded-lg scale-110 bg-black p-1' },
	{ name: 'Earth Wood & Fire', logoUrl: '/earth-wood-fire-logo.png', linkUrl: 'https://www.earthwoodfire.com/fallston/', class: '!rounded-lg scale-110' },
	// { name: 'The Nest', logoUrl: '/the-nest-logo.jpg', linkUrl: 'https://www.thenestonmainbelair.com/', class: '!rounded-lg scale-125' },
	{ name: 'The Tile Shop', logoUrl: '/the-tile-shop-logo.svg', linkUrl: 'https://www.tileshop.com/store-locator/bel-air', class: '!rounded-lg scale-125' },
	{ name: 'Weis Markets', logoUrl: '/weis-markets-logo.webp', linkUrl: 'https://www.weismarkets.com/stores/weis-markets-bel-air-172/4291', class: '!rounded-none scale-110' },
	{ name: "CoK Women's Prayer Group", logoUrl: '/womens-prayer-group-logo.png', linkUrl: 'https://christourking.net/welcome/whats-happening', class: '!rounded-lg scale-110' },
	{ name: 'Angles Hair Team', logoUrl: '/angles-logo.png', linkUrl: 'https://angleshairteam.com/', class: '!rounded-none' },
	{ name: 'Merle Norman Cosmetics', logoUrl: '/merle-norman-logo.jpg', linkUrl: 'https://www.merlenorman.com/homepage', class: '!rounded-lg bg-white px-2 scale-110' },
	{ name: "Petals 'n Posies", logoUrl: '/petals-n-posies-logo.png', linkUrl: 'https://www.petalsposiesatjonathans.com/', class: '!rounded-lg scale-125 bg-white pb-4' }
]

export let trucks = [
	{ name: 'Man I Love Food', logoUrl: '/milfs.jpg', linkUrl: 'https://milfs-hot-spot.square.site' },
	{ name: 'Dough Slingers', logoUrl: '/dough-slingers-logo.png', linkUrl: 'https://doughslingersfunnelcakes.com', class: 'scale-110' }
]

export let contacts = [
	{ name: 'Rebecca Wood - Bingo Chair', email: 'bingo@christourking.net', phone: '609-213-2310' },
	{ name: 'Colleen Gambril', email: 'colleen@christourking.net', phone: '410-836-0141' }
]
