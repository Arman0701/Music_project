const menuWrapperBtn = document.querySelector('.menuWrapper');
const allContentWrapper = document.querySelector('.all_content');
const navBarButton = document.querySelector('.header_nav');
navBarButton.addEventListener("click", () => {
  menuWrapperBtn.classList.remove('closeNavMenu');
  menuWrapperBtn.classList.add('loadingNavMenu');
  allContentWrapper.style.display = 'none';
  menuWrapperBtn.style.display = 'block';
})

const navMenuButton = document.querySelector('.navMenu');
navMenuButton.addEventListener("click", () => {
  menuWrapperBtn.classList.remove('loadingNavMenu');
  menuWrapperBtn.classList.add('closeNavMenu');
  setTimeout(() => {
    menuWrapperBtn.style.display = 'none';
    allContentWrapper.style.display = 'block';
  }, 1950);
});

// PLAYER LOGIC
const previous = document.querySelector('.prevBtn');
const justPlay = document.querySelector('.playBtn');
const next = document.querySelector('.nextBtn');
const muteBtnWrapper = document.querySelector('.muteBtnWrapper');
muteBtnWrapper.addEventListener('click', () => {
  muteBtnWrapper.innerHTML = '';
  if (muteMainPageAudio) {
    mainPageAudio.play();
    mainPageAudio.muted = false;
    muteBtnWrapper.innerHTML = `<i class='fas fa-volume-up'></i>`;
    muteMainPageAudio = false;
  } else {
    mainPageAudio.pause();
    mainPageAudio.muted = true;
    muteBtnWrapper.innerHTML = `<i class='fas fa-volume-mute'></i>`;
    muteMainPageAudio = true;
  }
});

const mainPageAudio = new Audio('./main-page-src-files/campfire-1.mp3');
mainPageAudio.play();
mainPageAudio.muted = true;
mainPageAudio.volume = 1;
mainPageAudio.loop = true;

const audio1 = new Audio('./main-page-src-files/music-files/music1.mp3');
const audio2 = new Audio('./main-page-src-files/music-files/music2.mp3');
const audio3 = new Audio('./main-page-src-files/music-files/music3.mp3');
const audio4 = new Audio('./main-page-src-files/music-files/music4.mp3');
const audio5 = new Audio('./main-page-src-files/music-files/music5.mp3');
const audio6 = new Audio('./main-page-src-files/music-files/music6.mp3');
const audio7 = new Audio('./main-page-src-files/music-files/music7.mp3');
const audio8 = new Audio('./main-page-src-files/music-files/music8.mp3');
const audio9 = new Audio('./main-page-src-files/music-files/music9.mp3');
const audio10 = new Audio('./main-page-src-files/music-files/music10.mp3');

let audioList = [audio1, audio2, audio3, audio4, audio5,
                 audio6, audio7, audio8, audio9, audio10];

let muteMainPageAudio = true;
let isPlaying = false;
let currentSong = 0;
let totalCount = audioList.length;  

audioList[currentSong].addEventListener('ended', nextSong);

previous.addEventListener('click', prevSong);

function prevSong() {
  pauseTrack();
  audioList[currentSong].currentTime = 0;
  currentSong -= 1;
  if (currentSong < 0) currentSong = totalCount - 1;
  playTrack();
}

next.addEventListener('click', nextSong);

function nextSong() {
  pauseTrack();
  audioList[currentSong].currentTime = 0;
  currentSong += 1;
  if (currentSong > totalCount - 1) currentSong = 0;
  playTrack();
}

justPlay.addEventListener('click', () => {
  if (isPlaying) { pauseTrack(); }
  else { playTrack(); }
});

function pauseTrack() {
  isPlaying = false;
  audioList[currentSong].pause();
  justPlay.innerHTML = '<i class="fas fa-play"></i>';
}
function playTrack() {
  isPlaying = true;
  audioList[currentSong].play();
  audioList[currentSong].addEventListener('ended', nextSong);
  justPlay.innerHTML = '<i class="fas fa-pause"></i>';
}

// NAVIGATION MENU
const menuBG = document.querySelector('.menuBG');
const menuList = document.querySelectorAll('.listItem');

menuList.forEach(elem => {
  elem.addEventListener('mouseover', (event) => {
    menuBG.innerHTML = event.target.innerHTML;
    menuBG.classList.add('breath');
  })
});

menuList.forEach(elem => {
  elem.addEventListener('mouseout', () => {
    menuBG.innerHTML = '';
    menuBG.classList.remove('breath');
  })
});