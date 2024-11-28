
let songIndex = 0;
let audioElement = new Audio("Music/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songPlayBtn = Array.from(document.getElementsByClassName("playBtnSong"));
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let forward = document.getElementById("forward");
let back = document.getElementById("back");
let songPlayerInfo = document.getElementById("songPlayerInfo");
let songInfoBanner = songPlayerInfo.querySelector('img');
let repeat = document.getElementById('repeat');
let shuffle = document.getElementById('shuffle');

let songs = [
    {songName:"Chanakya", path:"Music/0.mp3", coverPath:"Images/0.jpg", des:"Rishab Rikhiram Sharma"},
    {songName:"Aie Mare Humsafar", path:"Music/1.mp3", coverPath:"Images/1.jpg", des:"Vinod Rathod, Alka Yagnik"},
    {songName:"Arcade", path:"Music/2.mp3", coverPath:"Images/2.jpg", des:"Duncan Laurence"},
    {songName:"Bekhayali", path:"Music/3.mp3", coverPath:"Images/3.jpg", des:"Sachin Tandon, Sachet-Parampara"},
    {songName:"Dusk Till Dwan", path:"Music/4.mp3", coverPath:"Images/4.jpg", des:"ZAYN, Sia"},
    {songName:"Humnava Mare", path:"Music/5.mp3", coverPath:"Images/5.jpg", des:"Jubin Nautiyal, Rocky-Shiv"},
    {songName:"Kaabil Hoon", path:"Music/6.mp3", coverPath:"Images/6.jpg", des:"Jubin Nautiyal, Palak Muchhal"},
    {songName:"Kal Ho Naa Ho", path:"Music/7.mp3", coverPath:"Images/7.jpg", des:"Sonu Nigam, Shankar-Ehsaan-Loy"},
    {songName:"Ordinary Person", path:"Music/8.mp3", coverPath:"Images/8.jpg", des:"Anirudh Ravichander, Nikhita Gandhi"},
    {songName:"Master X Leo", path:"Music/9.mp3", coverPath:"Images/9.jpg", des:"Sharan Kumar"},
    {songName:"Way Down We Go", path:"Music/10.mp3", coverPath:"Images/10.jpg", des:"Song. KALEO"}
]

let originalOrder = [...songs];

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songTitle")[0].innerText = songs[i].songName;
    element.getElementsByClassName("songDes")[0].innerText = songs[i].des;
});
const makeAllPlays = () => {
    songPlayBtn.forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    });
};
songPlayBtn.forEach((element) => {
    element.addEventListener('click',(e) => {
        makeAllPlays();
        songs = originalOrder;
        songIndex = parseInt(e.target.id);
        song = songs[songIndex];
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.currentTime = 0;
        audioElement.src = song.path;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        loadSong(songIndex);
    });
});


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});

prev.addEventListener('click',() => {
    if (songIndex === 0){
        songIndex = (songs.length) - 1 ;
        song = songs[songIndex];
        audioElement.duration = 0;
        audioElement.src = song.path;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
    }
    else {
        songIndex = songIndex - 1;
        song = songs[songIndex];
        audioElement.duration = 0;
        audioElement.src = song.path;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
    };
    gif.style.opacity = 1
    loadSong(songIndex);
});

back.addEventListener('click',() => {
    const reduction = 10; // Seconds to reduce from current time
    
    // If the song's current time is less than 10 seconds
    if (audioElement.currentTime < reduction) {
        audioElement.currentTime = 0; // Restart the song from the beginning
    } else {
        // Reduce current time by 'reduction' seconds
        audioElement.currentTime = audioElement.currentTime - reduction;
    }
    
    // Play the song from the new current time
    if (audioElement.paused) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
        loadSong(songIndex);
    };
    gif.style.opacity = 1;
});

forward.addEventListener('click',() => {
    const inc = 10; // Seconds to reduce from current time
    // Reduce current time by 'reduction' seconds
    audioElement.currentTime = audioElement.currentTime + inc;
    
    // Play the song from the new current time
    if (audioElement.paused) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
        loadSong(songIndex);
    };
    gif.style.opacity = 1;
});

next.addEventListener('click',() => {
    if (songIndex === (songs.length) - 1) {
        songIndex = 0;
        song = songs[songIndex];
        audioElement.duration = 0;
        audioElement.src = song.path;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
    }
    else {
        songIndex = songIndex + 1;
        song = songs[songIndex];
        audioElement.duration = 0;
        audioElement.src = song.path;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
    };
    gif.style.opacity = 1;
    loadSong(songIndex);
});

audioElement.addEventListener('ended', () => {
    if (songIndex === (songs.length) - 1) {
        songIndex = 0;
        song = songs[songIndex];
        audioElement.duration = 0;
        audioElement.src = song.path;
        audioElement.play();
    }
    else {
        songIndex = songIndex + 1;
        song = songs[songIndex];
        audioElement.duration = 0;
        audioElement.src = song.path;
        audioElement.play();
        console.log(songIndex);
        loadSong(songIndex);
    };
});

function loadSong(index){
    const song = songs[index];
    songPlayerInfo.innerHTML = `<img src=${song.coverPath} id="songInfoBanner">${song.songName}`;
};

let isRepeatActive = false;
let isShuffleActive = false;

repeat.addEventListener('click',() => {
    if(!isRepeatActive){
        repeat.classList.add('active');
        shuffle.classList.remove('active');

        currentSong = songs[songIndex];
        songs = songs.map(() => currentSong);

        isRepeatActive = true;
        isShuffleActive = false;
    }else{
        repeat.classList.remove('active');
        songs = originalOrder;
        isRepeatActive = false;
    };
});

shuffle.addEventListener('click',() => {
    if(!isShuffleActive){
        shuffle.classList.add('active');
        repeat.classList.remove('active');
        
        songs = songs.sort(() => Math.random() - 0.5);

        isShuffleActive = true;
        isRepeatActive = false;
    }else{
        shuffle.classList.remove('active');
        songs = originalOrder;
        isShuffleActive = false;
    };
});
