
var myPlaylist = [
	{
		mp3:'music/checiny-6.mp3',
		oga:'music/checiny-6.ogg',
		title:'Chęciny - Klasztor Franciszkanów',
		artist:'Przewodnik po Gminie Chęciny położonej w centralnej części województwa świętokrzyskiego, w odległości kilkunastu kilometrów na południowy - zachód od Kielc.',
		rating:5,
		buy:'download05.php?src=checiny-6.mp3',
		price:'',
		duration:'20:46',
		cover:'music/2.jpg'	
	}		
];
jQuery(document).ready(function ($) {
	$('.spacer5f').ttwMusicPlayer(myPlaylist, {
		autoPlay:true,
		currencySymbol:'',
		buyText:'POBIERZ SPACER',
		tracksToShow:6,
		ratingCallback:function(index, playlistItem, rating){
		},
		jPlayer:{
			swfPath:'http://www.jplayer.org/2.1.0/js'
		}
	});
});