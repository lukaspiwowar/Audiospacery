var myPlaylist = [
	{
		mp3:'music/spacer02/kielecki-wehikul-czasu-1.mp3',
		oga:'music/spacer02/kielecki-wehikul-czasu-1.oga',
		title:'Kielecki wehikuł czasu - część 1/2',
		artist:'Przewodnik przeznaczony dla każdego ciekawego bogatego dziedzictwa kulturowego i historii Kielc. Spacer rozpoczniemy w miejscu gdzie zaczęła się historia miasta. W trakcie dwóch godzinnych spacerów poznamy zarys prawie 900 lat historii stolicy woj. świętokrzyskiego.  ',
		rating:5,
		buy:'download02.php?src=kielecki-wehikul-czasu-1.mp3',
		price:'',
		duration:'29:23',
		cover:'music/4.jpg'	
	},
		{
		mp3:'music/spacer02/kielecki-wehikul-czasu-2.mp3',
		oga:'music/spacer02/kielecki-wehikul-czasu-2.ogg',
		title:'Kielecki wehikuł czasu - część 2/2',
		artist:'Przewodnik przeznaczony dla każdego ciekawego bogatego dziedzictwa kulturowego i historii Kielc. Spacer rozpoczniemy w miejscu gdzie zaczęła się historia miasta. W trakcie dwóch godzinnych spacerów poznamy zarys prawie 900 lat historii stolicy woj. świętokrzyskiego.  ',
		rating:5,
		buy:'download02.php?src=kielecki-wehikul-czasu-2.mp3',
		price:'',
		duration:'45:23',
		cover:'music/1.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer2').ttwMusicPlayer(myPlaylist, {
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