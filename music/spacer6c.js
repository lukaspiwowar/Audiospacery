var myPlaylist = [	
	{
		mp3:'music/zagnansk-3.mp3',
		oga:'music/zagnansk-3.ogg',
		title:'Zagnańsk - Dąb Bartek',
		artist:'Przewodnik po Gminie Zagnańsk położonej w północnej części Województwa Świętokrzyskiego na terenie Powiatu Kieleckiego.  ',
		rating:5,
		buy:'download06.php?src=zagnansk-3.mp3',
		price:'',
		duration:'16:34',
		cover:'music/7.jpg'
	},
	{
		mp3:'music/zagnansk-4.mp3',
		oga:'music/zagnansk-4.ogg',
		title:'Zagnańsk - Ruiny huty „Józef',
		artist:'Przewodnik po Gminie Zagnańsk położonej w północnej części Województwa Świętokrzyskiego na terenie Powiatu Kieleckiego.  ',
		rating:5,
		buy:'download06.php?src=zagnansk-4.mp3',
		price:'',
		duration:'19:45',
		cover:'music/7.jpg'
	}	
];
jQuery(document).ready(function ($) {
	$('.spacer6c').ttwMusicPlayer(myPlaylist, {
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