console.log("Welocome to spotify");
//intialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    { songName: "On & On-Cartoon, Daniel Levi", filePath: "song/1.mp3", coverPath: "cover/1.jpg" },
    { SongName: "Invincible-DEAF KEV", filePath: "song/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Mortals-Warriyo, Laura Brehm", filePath: "song/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Shine-Spektrem", filePath: "song/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Why We Lose-Cartoon, Coleman Trapp", filePath: "song/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Sky High-Elektronomia", filePath: "song/6.mp3", coverPath: "cover/6.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName; 
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 1;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value / 100 * audioElement.duration;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})
document.getElementById('next').addEventListener('click',() => {
    if (songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',() => {
    if (songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})