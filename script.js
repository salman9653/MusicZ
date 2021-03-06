let songIndex = 1;
let audioElement = new Audio(`./songs/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar')
let playingCover = document.querySelector('.playingCover');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let playingTitle = document.querySelector('.playingTitle');

let songs = [
    { id: 1, songName: 'Warriyo - Mortals', filePath: './songs/1.mp3', coverPath: './covers/1.jpg', album: 'NCS', artist: '-', duration: '3:50' },
    { id: 2, songName: 'Cielo - Huma-Huma', filePath: './songs/2.mp3', coverPath: './covers/2.jpg', album: 'NCS', artist: '-', duration: '2:23' },
    { id: 3, songName: 'Seaf Kev - Invincible', filePath: './songs/3.mp3', coverPath: './covers/3.jpg', album: 'NCS', artist: '-', duration: '4:33' },
    { id: 4, songName: 'Different Heaven - My Heart', filePath: './songs/4.mp3', coverPath: './covers/4.jpg', album: 'NCS', artist: '-', duration: '4:27' },
    { id: 5, songName: 'Janji-Heroes-Tonight', filePath: './songs/5.mp3', coverPath: './covers/5.jpg', album: 'NCS', artist: '-', duration: '3:28' },
    { id: 6, songName: 'Warriyo - Mortals', filePath: './songs/1.mp3', coverPath: './covers/6.jpg', album: 'NCS', artist: '-', duration: '3:50' },
    { id: 7, songName: 'Cielo - Huma-Huma', filePath: './songs/2.mp3', coverPath: './covers/7.jpg', album: 'NCS', artist: '-', duration: '2:23' },
    { id: 8, songName: 'Seaf Kev - Invincible', filePath: './songs/3.mp3', coverPath: './covers/8.jpg', album: 'NCS', artist: '-', duration: '4:33' },
    { id: 9, songName: 'Different Heaven - My Heart', filePath: './songs/4.mp3', coverPath: './covers/9.jpg', album: 'NCS', artist: '-', duration: '4:27' },
    { id: 10, songName: 'Janji-Heroes-Tonight', filePath: './songs/5.mp3', coverPath: './covers/10.jpg', album: 'NCS', artist: '-', duration: '3:28' }

]

songItems.forEach((element, i) => {
    element.getElementsByClassName('songNo')[0].innerText = songs[i].id;
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songTitle')[0].innerText = songs[i].songName;
    element.getElementsByClassName('songArtist')[0].innerText = songs[i].artist;
    element.getElementsByClassName('songAlbum')[0].innerText = songs[i].album;
    element.getElementsByClassName('songTime')[0].innerText = songs[i].duration;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        playingCover.src = `./covers/${songIndex}.jpg`;
        playingCover.style.animation = "rotate 5s infinite linear";
        playingTitle.innerText = songs[songIndex - 1].songName;
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        playingCover.style.animationPlayState = "paused";
        document.getElementById(`${songIndex}`).classList.add('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-pause');
    }
})
const playNext = () => {
    if (songIndex >= 10) {
        songIndex = 1;
    } else {
        songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playingTitle.innerText = songs[songIndex - 1].songName;
    playingCover.src = `./covers/${songIndex}.jpg`;
    playingCover.style.animation = "rotate 5s infinite linear";
    makeAllPlay();
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
}
const playPrev = () => {
    if (songIndex <= 1) {
        songIndex = 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playingTitle.innerText = songs[songIndex - 1].songName;
    playingCover.src = `./covers/${songIndex}.jpg`;
    playingCover.style.animation = "rotate 5s infinite linear";
    makeAllPlay();
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
}

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
    if (progress === 100) {
        playNext();
    }
});

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration / 100);
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songPlayBtn')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songPlayBtn')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        if (audioElement.currentTime === 0 || e.target.id != songIndex) {
            songIndex = parseInt(e.target.id);
            audioElement.src = `./songs/${songIndex}.mp3`;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            playingCover.src = `./covers/${songIndex}.jpg`;
            playingCover.style.animation = "rotate 5s infinite linear";
            playingTitle.innerText = songs[songIndex - 1].songName;
        } else if (audioElement.paused) {
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            playingCover.src = `./covers/${songIndex}.jpg`;
            playingCover.style.animation = "rotate 5s infinite linear";
            playingTitle.innerText = songs[songIndex - 1].songName;
        }
        else {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            playingCover.style.animationPlayState = "paused";
        }
    })
})

document.getElementById("next").addEventListener('click', () => {
    playNext();
})
document.getElementById("prev").addEventListener('click', () => {
    playPrev();
})
