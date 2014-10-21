
var myPlaylist = [
	{
		mp3:'music/kielce-kraina-legend-1.mp3',
		oga:'music//kielce-kraina-legend-1.ogg',
		title:'Kielce - kraina legend',
		artist:'Przewodnik przeznaczony dla każdego ciekawego bogatego dziedzictwa kulturowego i historii Kielc. Spacer rozpoczniemy w miejscu gdzie zaczęła się historia miasta. W trakcie dwóch godzinnych spacerów poznamy zarys prawie 900 lat historii stolicy woj. świętokrzyskiego.  ',
		rating:5,
		buy:'download01.php?src=kielce-kraina-legend-1.mp3',
		price:'',
		duration:'34:56',
		cover:'music/5.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer1').ttwMusicPlayer(myPlaylist, {
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