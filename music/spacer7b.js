
var myPlaylist = [
	{
		mp3:'music/bodzentyn-2.mp3',
		oga:'music/bodzentyn-2.ogg',
		title:'Bodzentyn - Kościół św. Ducha',
		artist:'Przewodnik po mieście i gminie Bodzentyn położonej w północnej części województwa świętokrzyskiego i w północno-wschodniej części ziemskiego powiatu kieleckiego. ',
		rating:5,
		buy:'download07.php?src=bodzentyn-2.mp3',
		price:'',
		duration:'7:00',
		cover:'music/8.jpg'	
	},		
	{
		mp3:'music/bodzentyn-3.mp3',
		oga:'music/bodzentyn-3.ogg',
		title:'Bodzentyn - Zagroda Czernikiewiczów',
		artist:'Przewodnik po mieście i gminie Bodzentyn położonej w północnej części województwa świętokrzyskiego i w północno-wschodniej części ziemskiego powiatu kieleckiego. ',
		rating:5,
		buy:'download07.php?src=bodzentyn-3.mp3',
		price:'',
		duration:'13:26',
		cover:'music/8.jpg'	
	},
	{
		mp3:'music/bodzentyn-4.mp3',
		oga:'music/bodzentyn-4.ogg',
		title:'Bodzentyn - Kościół pw. Wniebowzięcia NMP i św. Stanisława Biskupa',
		artist:'Przewodnik po mieście i gminie Bodzentyn położonej w północnej części województwa świętokrzyskiego i w północno-wschodniej części ziemskiego powiatu kieleckiego. ',
		rating:5,
		buy:'download07.php?src=bodzentyn-4.mp3',
		price:'',
		duration:'10:02',
		cover:'music/8.jpg'	
	},
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
	$('.spacer7b').ttwMusicPlayer(myPlaylist, {
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