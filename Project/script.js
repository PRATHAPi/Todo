console.log("welcome")
//Intialize the variables
let songIndex=0;
let audioElement=new Audio("./song4.mp3");
let masterPlay=document.getElementById('masterPlay');
let progress=document.getElementById('progress');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Beast Mode",filePath:'./song1.mp3',coverpath:'./cover1.jpg'},
    {songName:"Chilla chilla",filePath:'./song2.mp3',coverpath:'./cover2.jpg'},
    {songName:"Brazilian Phonk",filePath:'./song3.mp3',coverpath:'./cover3.jpeg'},
    {songName:"Naa Ready",filePath:'./song4.mp3',coverpath:'./cover4.jpg'},
    {songName:"Naa Ready",filePath:'./song4.mp3',coverpath:'./cover4.jpg'},
    {songName:"Naa Ready",filePath:'./song4.mp3',coverpath:'./cover4.jpg'},


]
masterPlay.addEventListener('click',() =>{
    if (audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
         masterPlay.classList.remove('fa-play');
         masterPlay.classList.add("fa-pause");
        console.log('playing');
    }
    else{
        audioElement.pause();
        // masterPlay.classList.remove("fa-solid fa-pause");
        // masterPlay.classList.add('fa-solid fa-play');
        console.log('pause');
    }
});
progress.addEventListener('timeupdate',() =>{
    progress=(parseInt(audioElement.currentTime/audioElement.duration)*100);
    progress.value=progress;

})
progress.addEventListener('change' ,() =>{
    audioElement.currentTime= progress.value * audioElement.duration/100;
})