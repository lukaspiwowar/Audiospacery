var myPlaylist = [
	{
		mp3:'music/spacer03/z-wizyta-w-klerykowie-1.mp3',
		oga:'music/spacer03/z-wizyta-w-klerykowie-1.ogg',
		title:'Z wizytą w Klerykowie',
		artist:'Stefan Żeromski urodził się na świętokrzyskiej ziemi, w Kielcach uczęszczał do szkoły i do miasta swej młodości niejednokrotnie powracał w swych książkach. Nazywał je Klerykowem, Łżawcem, Obrzydłówkiem. W Kielcach do dziś znaleźć można wiele miejsc związanych z pisarzem i bohaterami jego utworów. ',
		rating:5,
		buy:'download03.php?src=z-wizyta-w-klerykowie-1.mp3',
		price:'',
		duration:'25:23',
		cover:'music/6.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer3').ttwMusicPlayer(myPlaylist, {
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