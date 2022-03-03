//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "Kaiser Networks | FantasyRP";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 10000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 5000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 0;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = false;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "Dark Tavern Music - Goblin King's Tavern.ogg", name: "Tea for Two"},
	{ogg: "Drums of Drakkar vikings and medieval music.ogg", name: "Tea for Two1"},
	{ogg: "Faolan - Auld Tavern Song [Medieval Tavern Music].ogg", name: "Tea for Two2"},
	{ogg: "Faolan - Farewell [Beautiful Calm Music].ogg", name: "Tea for Two3"},
	{ogg: "Faolan - Immortal [Battle Music].ogg", name: "Tea for Two4"},
	{ogg: "Faolan - In The Tavern [Medieval Tavern Music].ogg", name: "Tea for Two5"},
	{ogg: "Faolan - Mist of the Highlands [Celtic Music].ogg", name: "Tea for Two6"},
	{ogg: "Faolan - Tales of Triumph [Epic Viking Music].ogg", name: "Tea for Two7"},
	{ogg: "Medieval Music – Wild Boar's Inn.ogg", name: "Tea for Two8"},
	{ogg: "Medieval Tavern Music - Brown Fox Inn.ogg", name: "Tea for Two9"},
	{ogg: "Medieval Tavern Music - Hooded Rogue Inn.ogg", name: "Tea for Two10"},
	{ogg: "Toss A Coin To Your Witcher.ogg", name: "Tea for Two11"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 2;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Join our Discord: https://discordapp.com/invite/H2bzFcpYMp.",
	"If your Garry's Mod Crashes or you time out from the server. Go to your Steam Games Library > Right Click Garry's Mod > Click Properties > Click Betas > Select X86-64 - Chromium + 64-bit binaries > This will update your Gmod > Run Gmod, do NOT select 32Bit/64Bit. Launch game a couple of times. Enjoy!",
	"Add me at https://steamcommunity.com/id/DonNecro/ to troubleshoot any connection issues.",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 30000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};