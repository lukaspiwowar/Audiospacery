
var myPlaylist = [
	{
		mp3:'music/wachock-4.mp3',
		oga:'music/wachock-4.ogg',
		title:'Wąchock - część 4/4',
		artist:'Przewodnik po Gminie Wąchock położonej w północno - wschodniej części Województwa Świętokrzyskiego w dolinie rzeki Kamiennej.  ',
		rating:5,
		buy:'download08.php?src=wachock-4.mp3',
		price:'',
		duration:'16:41',
		cover:'music/9.jpg'	
	}	
];
jQuery(document).ready(function ($) {
	$('.spacer8d').ttwMusicPlayer(myPlaylist, {
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