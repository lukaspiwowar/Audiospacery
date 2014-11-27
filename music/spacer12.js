var myPlaylist = [
	{
		mp3:'music/kielce-kraina-legend-1.mp3',
		oga:'music//kielce-kraina-legend-1.ogg',
		title:'Św Katarzyna - św. Krzyż - Start',
		artist:'Przewodnik po najciekawszych miejscach związanych z Łysogórami najwyższym pasmem Gór Świętokrzyskich.',
		rating:5,
		buy:'download01.php?src=kielce-kraina-legend-1.mp3',
		price:'',
		duration:'34:56',
		cover:'music/5.jpg'	
	},
	{
		mp3:'music/szydlow-2.mp3',
		oga:'music/szydlow-2.ogg',
		title:'Św Katarzyna - św. Krzyż - Klasztor Sióstr Bernardynek',
		artist:'Przewodnik po Szydłowie. Miejscowości położonej na geologicznym skraju gór świętokrzyskich, słynącej z zachowanego 700 metrowego muru obronnego z blankami i strzelnicami z XIV, oraz produkcji suszonych owoców.',
		rating:5,
		buy:'download10.php?src=chmielnik-2.mp3',
		price:'',
		duration:'08:07',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-3.mp3',
		oga:'music/szydlow-3.ogg',
		title:'Św Katarzyna - św. Krzyż - Huta Szklana',
		artist:'Przewodnik po Szydłowie. Miejscowości położonej na geologicznym skraju gór świętokrzyskich, słynącej z zachowanego 700 metrowego muru obronnego z blankami i strzelnicami z XIV, oraz produkcji suszonych owoców.  ',
		rating:5,
		buy:'download10.php?src=chmielnik-3.mp3',
		price:'',
		duration:'23:16',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-4.mp3',
		oga:'music/szydlow-4.ogg',
		title:'Św Katarzyna - św. Krzyż - Gołoborze',
		artist:'Przewodnik po Szydłowie. Miejscowości położonej na geologicznym skraju gór świętokrzyskich, słynącej z zachowanego 700 metrowego muru obronnego z blankami i strzelnicami z XIV, oraz produkcji suszonych owoców.  ',
		rating:5,
		buy:'download10.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-5.mp3',
		oga:'music/szydlow-5.ogg',
		title:'Św Katarzyna - św. Krzyż - Łysa Góra/Św. Krzyż',
		artist:'Przewodnik po Szydłowie. Miejscowości położonej na geologicznym skraju gór świętokrzyskich, słynącej z zachowanego 700 metrowego muru obronnego z blankami i strzelnicami z XIV, oraz produkcji suszonych owoców.  ',
		rating:5,
		buy:'download10.php?src=chmielnik-5.mp3',
		price:'',
		duration:'16:54',
		cover:'music/10.jpg'	
	}	
];
jQuery(document).ready(function ($) {
	$('.spacer12').ttwMusicPlayer(myPlaylist, {
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