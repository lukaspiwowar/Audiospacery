
var myPlaylist = [	
	{
		mp3:'music/bodzentyn-5.mp3',
		oga:'music/bodzentyn-5.ogg',
		title:'Bodzentyn - Ruiny Zamku',
		artist:'Przewodnik po mieście i gminie Bodzentyn położonej w północnej części województwa świętokrzyskiego i w północno-wschodniej części ziemskiego powiatu kieleckiego. ',
		rating:5,
		buy:'download07.php?src=bodzentyn-5.mp3',
		price:'',
		duration:'12:22',
		cover:'music/8.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer7e').ttwMusicPlayer(myPlaylist, {
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