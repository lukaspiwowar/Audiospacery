
var myPlaylist = [
	{
		mp3:'music/checiny-3.mp3',
		oga:'music/checiny-3.ogg',
		title:'Chęciny - część 3/6',
		artist:'Przewodnik po Gminie Chęciny położonej w centralnej części województwa świętokrzyskiego, w odległości kilkunastu kilometrów na południowy - zachód od Kielc.',
		rating:5,
		buy:'download05.php?src=checiny-3.mp3',
		price:'',
		duration:'21:10',
		cover:'music/2.jpg'	
	},
	{
		mp3:'music/checiny-4.mp3',
		oga:'music/checiny-4.ogg',
		title:'Chęciny - część 4/6',
		artist:'Przewodnik po Gminie Chęciny położonej w centralnej części województwa świętokrzyskiego, w odległości kilkunastu kilometrów na południowy - zachód od Kielc.',
		rating:5,
		buy:'download05.php?src=checiny-4.mp3',
		price:'',
		duration:'11:15',
		cover:'music/2.jpg'	
	},
	{
		mp3:'music/checiny-5.mp3',
		oga:'music/checiny-5.ogg',
		title:'Chęciny - część 5/6',
		artist:'Przewodnik po Gminie Chęciny położonej w centralnej części województwa świętokrzyskiego, w odległości kilkunastu kilometrów na południowy - zachód od Kielc.',
		rating:5,
		buy:'download05.php?src=checiny-5.mp3',
		price:'',
		duration:'09:54',
		cover:'music/2.jpg'	
	},
	{
		mp3:'music/checiny-6.mp3',
		oga:'music/checiny-6.ogg',
		title:'Chęciny - część 6/6',
		artist:'Przewodnik po Gminie Chęciny położonej w centralnej części województwa świętokrzyskiego, w odległości kilkunastu kilometrów na południowy - zachód od Kielc.',
		rating:5,
		buy:'download05.php?src=checiny-6.mp3',
		price:'',
		duration:'20:46',
		cover:'music/2.jpg'	
	}		
];
jQuery(document).ready(function ($) {
	$('.spacer5c').ttwMusicPlayer(myPlaylist, {
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