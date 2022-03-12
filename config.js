//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.17.2

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.png"

// Text to be shown on logo
config.logo_text = "SleekLoad"

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = true

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = false

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = true

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "purple_blue_rays.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 10

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "Black Horse's Inn",
		youtube: "https://www.youtube.com/watch?v=CYn8loOBn5g",
	},
	{
		name: "Battle of the Creek",
		youtube: "https://www.youtube.com/watch?v=hZReWwtGqoI",
	},
	{
		name: "Toss a coin to your withcer",
		youtube: "https://www.youtube.com/watch?v=U9OQAySv184",
	},
	{
		name: "Burn Butcher Burn",
		youtube: "https://www.youtube.com/watch?v=qICRQYdUpps",
	},
	{
		name: "Faolan - In The Tavern",
		youtube: "https://www.youtube.com/watch?v=D-hC6Y5R7I8",
	},
	{
		name: "Faolan - Auld Tavern",
		youtube: "https://www.youtube.com/watch?v=4C-_qmN5-mI",
	},
	{
		name: "Jocesquale - The Drunken Gambler",
		youtube: "https://www.youtube.com/watch?v=-Q5Y037vIyc&list=RDD-hC6Y5R7I8&index=8",
	},
	{
		name: "Seaside Tavern",
		youtube: "https://www.youtube.com/watch?v=qklByQJWyLk&list=RDD-hC6Y5R7I8&index=11",
	},
	{
		name: "Drums of Drakkar",
		youtube: "https://www.youtube.com/watch?v=A4oiY1Mqj90&list=RDD-hC6Y5R7I8&index=13",
	},
	{
		name: "Drums of the Horde",
		youtube: "https://www.youtube.com/watch?v=nFmQqUxH7GA&list=RDLVG24_1FbBrbg&index=14", 
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 20

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Join our Discord: https://discordapp.com/invite/H2bzFcpYMp",
	"If you time-out or crash out of gmod contact us on discord for support: https://discordapp.com/invite/H2bzFcpYMp, or add [KSN] Don Necro on STEAM",
	"Check out our website in the meantime at KaiserNetworks.mistforums.com",
	"A KingdomRP like never before.",
	"Weapon Rarities: Common, Uncommon, Rare, Unique, Legendary & Ancient! Level your crafting all the way up the tiers.",
	"Blacksmithing: Mine, Chop, & Craft from the lowest of weapons refining and leveling up your skills to create better weaponry.",
	"Alchemy: Forage for herbs and mix them together to create potions, the more you do it the better potions you can create!",
	"Farming: Feed the hungry of this land. Grow plots of vegetables & fruits that increase players hunger & health",
	"Factions: Try out and join the faction that calls to you most Draco, Beings, Leon, or Dague?",
	"Capture points: Join your faction in the quest of conquering the lands ahead. If you have enough territory you may raid your enemies with your commanders!",
	"Mobs & Bosses: All mobs drop loot into your C inventory. Press C when not holding a weapon to open it. Mobs drop gold and experience books, Mini bosses & Event bosses drop weapons, gold, and experience books.",
	"Beware of night time when the creatures come out crawling from the depths of the dark to attack anyone outside of their castle! Defend yourselves!",
	"https://steamcommunity.com/id/DonNecro/ add me if you have any questions or converns",
	"Knights, Guards, Mages, Archers, Assassins, and more! Choose your calling right. It's never too late to turn around...",
	"Thank you for patiently waiting, bare with us as we load our content",
	"Please subscribe to the workshop as this will better improve your overall experience: https://steamcommunity.com/workshop/filedetails/?id=2437917324",
]

// Random message order?
// "true" or "false"
config.messages_random_order = true

// Delay between message changes
// in milliseconds
config.messages_delay = 15000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = false
