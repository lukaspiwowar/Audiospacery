
var myPlaylist = [
	{
		mp3:'music/chmielnik-5.mp3',
		oga:'music/chmielnik-5.ogg',
		title:'Chmielnik - część 5/5',
		artist:'Przewodnik po Gminie Chmielnik położonej w południowo-wschodniej części województwa świętokrzyskiego, w centrum Niecki Nidziańskiej, na skraju Pogórza Szydłowskiego i Niecki Połanieckiej.  ',
		rating:5,
		buy:'download09.php?src=chmielnik-5.mp3',
		price:'',
		duration:'16:54',
		cover:'music/10.jpg'	
	}	
];
jQuery(document).ready(function ($) {
	$('.spacer9e').ttwMusicPlayer(myPlaylist, {
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