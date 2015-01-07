var myPlaylist = [
	{
		mp3:'music/spacer04/kielecka-aleja-slaw-1.mp3',
		oga:'music/spacer04/kielecka-aleja-slaw-1.ogg',
		title:'Kielecka Aleja Sław - część 1/5 ',
		artist:'Zestaw 46 biografii, oraz fragmentów utworów osób których popiersia tworzą Kielecką Aleję Sław znajdującą się na Skwerze Harcerskim im. Szarych Szeregów. ',
		rating:5,
		buy:'download04.php?src=kielecka-aleja-slaw-1.mp3',
		price:'',
		duration:'59:26',
		cover:'music/3.jpg'	
	},
	{
		mp3:'music/spacer04/kielecka-aleja-slaw-2.mp3',
		oga:'music/spacer04/kielecka-aleja-slaw-2.ogg',
		title:'Kielecka Aleja Sław - część 2/5 ',		
		artist:'Zestaw 46 biografii, oraz fragmentów utworów osób których popiersia tworzą Kielecką Aleję Sław znajdującą się na Skwerze Harcerskim im. Szarych Szeregów. ',
		rating:5,
		buy:'download04.php?src=kielecka-aleja-slaw-2.mp3',
		price:'',
		duration:'34:56',
		cover:'music/3.jpg'	
	},		
	{
		mp3:'music/spacer04/kielecka-aleja-slaw-3.mp3',
		oga:'music/spacer04/kielecka-aleja-slaw-3.ogg',
		title:'Kielecka Aleja Sław - część 3/5 ',
		artist:'Zestaw 46 biografii, oraz fragmentów utworów osób których popiersia tworzą Kielecką Aleję Sław znajdującą się na Skwerze Harcerskim im. Szarych Szeregów. ',
		rating:5,
		buy:'download04.php?src=kielecka-aleja-slaw-3.mp3',
		price:'',
		duration:'34:56',
		cover:'music/3.jpg'	
	},
	{
		mp3:'music/spacer04/kielecka-aleja-slaw-4.mp3',
		oga:'music/spacer04/kielecka-aleja-slaw-4.ogg',
		title:'Kielecka Aleja Sław - część 4/5 ',
		artist:'Zestaw 46 biografii, oraz fragmentów utworów osób których popiersia tworzą Kielecką Aleję Sław znajdującą się na Skwerze Harcerskim im. Szarych Szeregów. ',
		rating:5,
		buy:'download04.php?src=kielecka-aleja-slaw-4.mp3',
		price:'',
		duration:'34:56',
		cover:'music/3.jpg'	
	},
	{
		mp3:'music/spacer04/kielecka-aleja-slaw-5.mp3',
		oga:'music/spacer04/kielecka-aleja-slaw-5.ogg',
		title:'Kielecka Aleja Sław - część 5/5 ',
		artist:'Zestaw 46 biografii, oraz fragmentów utworów osób których popiersia tworzą Kielecką Aleję Sław znajdującą się na Skwerze Harcerskim im. Szarych Szeregów. ',
		rating:5,
		buy:'download04.php?src=kielecka-aleja-slaw-5.mp3',
		price:'',
		duration:'34:56',
		cover:'music/3.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer4').ttwMusicPlayer(myPlaylist, {
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