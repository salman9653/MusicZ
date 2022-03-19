let songIndex = 0
let audioElement = new Audio('./songs/Faded.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar')

let songs = [
    { songName: 'Faded', filePath: './songs/Faded.mp3', coverPath: './covers/1.jpg' },
    { songName: 'Faded', filePath: './songs/Faded.mp3', coverPath: './covers/1.jpg' }
]

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play')
    }
})

progressBar.addEventListener('timeupdate', () => {

})