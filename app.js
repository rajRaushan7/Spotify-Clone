console.log("Hello World");

let songIndex = 0;
let audioElement = new Audio("Music/Leo bgm.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');

let songs = [
    {songName:"Chanakya", path:"Music/Chanakya.mp3", coverPath:"Images/Chanakya.jpg"},
    {songName:"Aie Mare Humsafar", path:"Music/Aie mare humsafar.mp3", coverPath:"Images/humsafar.jpeg"},
    {songName:"Arcade", path:"Music/Arcade.mp3", coverPath:"Images/arcade.jpg"},
    {songName:"Bekhayali", path:"Music/Bekhayali.mp3", coverPath:"Images/bekhayali.jpg"},
    {songName:"Dusk Till Dwan", path:"Music/Dusk till dwan.mp3", coverPath:"Images/dusk till dwan.jpeg"},
    {songName:"Humnava Mare", path:"Music/Humnava.mp3", coverPath:"Images/humnava.jpeg"},
    {songName:"Kaabil Hoon", path:"Music/Kaabil hoon.mp3", coverPath:"Images/kaabil hoon.jpg"},
    {songName:"Kal Ho Naa Ho", path:"Music/Kal ho na ho.mp3", coverPath:"Images/kal ho na ho.jpg"},
    {songName:'Ordinary Person (From "Leo")', path:"Music/Leo bgm.mp3", coverPath:"Images/leo bgm.jpg"},
    {songName:"Master X Leo", path:"Music/Master X Leo.mp3", coverPath:"Images/master X Leo.jpg"},
    {songName:"Way Down We Go", path:"Music/Way down we go.mp3", coverPath:"Images/way down we go.jpg"}
]

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
})

myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
});
