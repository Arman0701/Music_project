const navBarButton = document.querySelector('.header_nav');
navBarButton.addEventListener("click", ()=>{
    document.querySelector('.menuWrapper').classList.remove('closeNavMenu');
    document.querySelector('.menuWrapper').classList.add('loadingNavMenu');
    document.querySelector('.fullPage').style.display = 'none';
    document.querySelector('.menuWrapper').style.display = 'block';
})

const navMenuButton = document.querySelector('.navMenu');
navMenuButton.addEventListener("click", ()=>{
    document.querySelector('.menuWrapper').classList.remove('loadingNavMenu');
    document.querySelector('.menuWrapper').classList.add('closeNavMenu');
    setTimeout(()=>{
      document.querySelector('.menuWrapper').style.display = 'none';
      document.querySelector('.fullPage').style.display = 'block';
    }, 1950);
});

const songs = document.querySelectorAll('.songBox');
let index;
let elm;
songs.forEach((elem)=>{
  elem.addEventListener('click', ()=>{
    let index = +elem.getAttribute('data-index');
    audioList.forEach(element=>{
      element.pause();
      element.currentTime = 0;
    });
    if (isPlaying) {
      audioList[index].pause();
      isPlaying = false;
      songs.forEach(elem=>{
        elem.children[1].children[1].style.display = 'none';
      });
    } else {
      audioList[index].play();
      isPlaying = true;
      elem.children[1].children[1].style.display = 'block';
    }
    elm = elem;
  });
});

// PLAYER LOGIC

const audio1 = new Audio('../main-page-src-files/music-files/music1.mp3');
const audio2 = new Audio('../main-page-src-files/music-files/music2.mp3');
const audio3 = new Audio('../main-page-src-files/music-files/music3.mp3');
const audio4 = new Audio('../main-page-src-files/music-files/music4.mp3');
const audio5 = new Audio('../main-page-src-files/music-files/music5.mp3');
const audio6 = new Audio('../main-page-src-files/music-files/music6.mp3');
const audio7 = new Audio('../main-page-src-files/music-files/music7.mp3');
const audio8 = new Audio('../main-page-src-files/music-files/music8.mp3');
const audio9 = new Audio('../main-page-src-files/music-files/music9.mp3');
const audio10 = new Audio('../main-page-src-files/music-files/music10.mp3');

let audioList = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10];
let isPlaying = false;


const menuBG = document.querySelector('.menuBG');
const menuList = document.querySelectorAll('.listItem'); 

menuList.forEach(elem => {
    elem.addEventListener('mouseover', (event)=>{
        menuBG.innerHTML = event.target.innerHTML;
        menuBG.classList.add('breath');
    })
});

menuList.forEach(elem => {
    elem.addEventListener('mouseout', ()=>{
        menuBG.innerHTML = '';
        menuBG.classList.remove('breath');
    })                                               
});