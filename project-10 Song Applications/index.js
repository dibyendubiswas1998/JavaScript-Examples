const Pre = document.getElementById('pre');
const Play = document.getElementById('play');
const Next = document.getElementById('next');
	
const Song_Name = document.getElementById('song_name');
const Artist_Name = document.getElementById('artist_name');
const Img = document.querySelector('img');
const Music = document.querySelector('audio');
		
// Create a Songs List
const songs = [
	{
		name: "Meherbani",
		Song_Name: "Meherbani",
		Artist_Name: "Jubin Nautiyal",
	},
	{
		name: "Orrey Mon",
		Song_Name: "Orrey Mon",
		Artist_Name: "Ayushmann Khurrana",
	},
	{
		name: "Thoda Sa",
		Song_Name: "Thoda Sa",
		Artist_Name: "Jubin Nautiyal"
	}
]

let isPlaying = false;
const PlayMusic = () =>{
isPlaying = true;
Music.play();
	Play.classList.replace('fa-play', 'fa-pause');
}
	
const PauseMusic = () =>{
	isPlaying = false;
	Music.pause();
	Play.classList.replace('fa-pause', 'fa-play');
}

//click for play and paused music
Play.addEventListener('click', () =>{
	if(isPlaying){
		PauseMusic();
	}
	else{
		PlayMusic();
	}
});
const loaddata = (songs) =>{
	Song_Name.textContent = songs.name;
	Artist_Name.textContent = songs.Artist_Name;
	Music.src = "music/" + songs.name + ".mp3";
	Img.src = "pictures/" + songs.name + ".JPG";
}	
SongIndex = 0;
const NextSong = () =>{
	SongIndex = (SongIndex + 1)% songs.length;
	loaddata(songs[SongIndex]);
	PlayMusic();
}
const PreviousSong = () =>{
	SongIndex = (SongIndex - 1 + songs.length) % songs.length;
	loaddata(songs[SongIndex]);
	PlayMusic();
}
Next.addEventListener('click', NextSong);
Pre.addEventListener('click', PreviousSong);
