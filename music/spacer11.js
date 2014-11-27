var myPlaylist = [
	{
		mp3:'music/kielce-kraina-legend-1.mp3',
		oga:'music//kielce-kraina-legend-1.ogg',
		title:'Zamek Krzyżtopór',
		artist:'Przewodnik po zamku Krzyżtopór, położonym w miejscowości Ujazd w województwie świętokrzyskim. Wznoszonym w XVII wieku. Obecnie znajdującym się w stanie ruiny.',
		rating:5,
		buy:'download01.php?src=kielce-kraina-legend-1.mp3',
		price:'',
		duration:'34:56',
		cover:'music/5.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer11').ttwMusicPlayer(myPlaylist, {
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