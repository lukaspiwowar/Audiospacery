
var myPlaylist = [
	{
		mp3:'music/chmielnik-2.mp3',
		oga:'music/chmielnik-2.ogg',
		title:'Chmielnik - Kościół pw. Świętej Trójcy',
		artist:'Przewodnik po Gminie Chmielnik położonej w południowo-wschodniej części województwa świętokrzyskiego, w centrum Niecki Nidziańskiej, na skraju Pogórza Szydłowskiego i Niecki Połanieckiej.',
		rating:5,
		buy:'download09.php?src=chmielnik-2.mp3',
		price:'',
		duration:'08:07',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/chmielnik-3.mp3',
		oga:'music/chmielnik-3.ogg',
		title:'Chmielnik - Rynek',
		artist:'Przewodnik po Gminie Chmielnik położonej w południowo-wschodniej części województwa świętokrzyskiego, w centrum Niecki Nidziańskiej, na skraju Pogórza Szydłowskiego i Niecki Połanieckiej.  ',
		rating:5,
		buy:'download09.php?src=chmielnik-3.mp3',
		price:'',
		duration:'23:16',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/chmielnik-4.mp3',
		oga:'music/chmielnik-4.ogg',
		title:'Chmielnik - Kościół pw. Niepokalanego Poczęcia NMP',
		artist:'Przewodnik po Gminie Chmielnik położonej w południowo-wschodniej części województwa świętokrzyskiego, w centrum Niecki Nidziańskiej, na skraju Pogórza Szydłowskiego i Niecki Połanieckiej.  ',
		rating:5,
		buy:'download09.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/chmielnik-5.mp3',
		oga:'music/chmielnik-5.ogg',
		title:'Chmielnik - Synagoga',
		artist:'Przewodnik po Gminie Chmielnik położonej w południowo-wschodniej części województwa świętokrzyskiego, w centrum Niecki Nidziańskiej, na skraju Pogórza Szydłowskiego i Niecki Połanieckiej.  ',
		rating:5,
		buy:'download09.php?src=chmielnik-5.mp3',
		price:'',
		duration:'16:54',
		cover:'music/10.jpg'	
	}	
];
jQuery(document).ready(function ($) {
	$('.spacer9b').ttwMusicPlayer(myPlaylist, {
		autoPlay:true,
		currencySymbol:'',
		buyText:'POBIERZ SPACER',
		tracksToShow:5,
		ratingCallback:function(index, playlistItem, rating){
		},
		jPlayer:{
			swfPath:'http://www.jplayer.org/2.1.0/js'
		}
	});
});