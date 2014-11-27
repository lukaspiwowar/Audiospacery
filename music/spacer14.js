var myPlaylist = [
	{
		mp3:'music/kielce-kraina-legend-1.mp3',
		oga:'music//kielce-kraina-legend-1.ogg',
		title:'Sandomierz - Start',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download01.php?src=kielce-kraina-legend-1.mp3',
		price:'',
		duration:'34:56',
		cover:'music/5.jpg'	
	},
	{
		mp3:'music/szydlow-2.mp3',
		title:'Sandomierz - Skarpa Sandomierska',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-2.mp3',
		price:'',
		duration:'08:07',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-3.mp3',
		title:'Sandomierz - Bazylika Katedralna',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-3.mp3',
		price:'',
		duration:'23:16',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-4.mp3',
		title:'Sandomierz - Zamek Królewski',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-4.mp3',
		title:'Sandomierz - Kościół pod wezwaniem św. Jakuba Apostoła',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-4.mp3',
		title:'Sandomierz - ul. Zamkowa',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-4.mp3',
		title:'Sandomierz - Rynek',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	},
	{
		mp3:'music/szydlow-4.mp3',
		title:'Sandomierz - Brama Opatowska',
		artist:' Przewodnik po Sandomierzu, jednym z najważniejszych miast średniowiecznej Polski. Współcześnie znanym min. z nagrywanego tutaj serialu „Ojciec Mateusz”.',
		rating:5,
		buy:'download10.php?src=chmielnik-4.mp3',
		price:'',
		duration:'14:47',
		cover:'music/10.jpg'	
	}
];
jQuery(document).ready(function ($) {
	$('.spacer14').ttwMusicPlayer(myPlaylist, {
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