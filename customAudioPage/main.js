const audioListWrapper = document.querySelector('.audioList');
const navBarButton = document.querySelector('.header_nav');
navBarButton.addEventListener("click", () => {
  document.querySelector('.menuWrapper').classList.remove('closeNavMenu');
  document.querySelector('.menuWrapper').classList.add('loadingNavMenu');
  document.querySelector('.mainPage').style.display = 'none';
  document.querySelector('.menuWrapper').style.display = 'block';
})

const navMenuButton = document.querySelector('.navMenu');
navMenuButton.addEventListener("click", () => {
  document.querySelector('.menuWrapper').classList.remove('loadingNavMenu');
  document.querySelector('.menuWrapper').classList.add('closeNavMenu');
  setTimeout(() => {
    document.querySelector('.menuWrapper').style.display = 'none';
    document.querySelector('.mainPage').style.display = 'block';
  }, 1950);
});

// document.querySelector("#addButton").addEventListener("click",function(){
//   const path = document.querySelector("#newSong").value;
//   if (path.slice(-3) === 'mp3') {
//     // createAudio(path)
//     let freader = new FileReader()
//   let esim =   freader.readAsDataURL(document.querySelector("#newSong").value)
//   console.log(esim)
//     // addAudioItem(...createAudioObject(path));
//     // console.log(path);
//   }
// });
const musicInput = document.querySelector("#newSong")
musicInput.addEventListener("change",function(){
  let freader = new FileReader()
    // let esim =   freader.readAsDataURL(musicInput.files);
  console.log(musicInput.files);
   freader.onloadend = function (event){
    //  console.log(esim)
    //  console.log(event)
   }

})

function newElem(name, parent, attributes, text){
  const elem = document.createElement(name);
  for (let attr in attributes){
      elem.setAttribute(`${attr}`, `${attributes[attr]}`);
  }
  if (text) elem.innerText = text;
  parent.appendChild(elem);
  return elem;
}

function addAudioItem(name, duration, index){
  const audioWrapper = newElem('div', audioListWrapper, {
    'class': 'audioItem',
    'data-index': `${index}`
  });
  const itemPlayBtn = newElem('div', audioWrapper, {
    'class': 'playBtn',
  });
  newElem('i', itemPlayBtn, {
    'class': 'fas fa-play',
  });
  newElem('div', audioWrapper, {
    'class': 'name',
  }, `${name}`);
  newElem('div', audioWrapper, {
    'class': 'duration',
  }, `${duration}`);
  const itemDeleteBtn = newElem('div', audioWrapper, {
    'class': 'playBtn',
  });
  newElem('i', itemDeleteBtn, {
    'class': 'fas fa-trash-alt',
  });
}

function createAudioObject(path){
  const name = String(path).slice(12,-4);
  console.log(name)
  const newAudio = new Audio(path);
  console.log(newAudio.duration);
  console.log(name);
}
let count = 15
function createAudio(path){
  console.log(path)
  let audio = new Audio(path)
  console.log(audio)
  audio.play()

}
createAudioObject('C:\fakepath\_Falling_ - Emotional Piano Rap Instrumental Beat ( 256kbps cbr ).mp3')
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


let smokeyness = 100;
let density = 40;

let swide = 800;
let shigh = 600;
let toke = new Array();
let tokex = new Array();
let tokedx = new Array();
let tokey = new Array();
let nicotine = new Array();
let mousedown = false;
let x = 400;
let y = 300;
let sleft = sdown = 0;
let ie_version = (navigator.appVersion.indexOf("MSIE") != -1) ? parseFloat(navigator.appVersion.split("MSIE")[1]) : false;

function addLoadEvent(funky) {
  let oldonload = window.onload;
  if (typeof (oldonload) != 'function') window.onload = funky;
  else window.onload = function () {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(puff);

function puff() {
  if (document.getElementById) {
    let i, fag;
    for (i = 0; i < smokeyness; i++) {
      fag = document.createElement("div");
      toke[i] = fag.style;
      toke[i].position = "absolute";
      toke[i].backgroundColor = "transparent";
      toke[i].font = "bold " + density + "px Tahoma, Geneva, sans-serif";
      toke[i].color = "rgba(234,234,234,0.033)";
      toke[i].zIndex = "9999";
      toke[i].pointerEvents = "none";
      toke[i].visibility = "hidden";
      fag.appendChild(document.createTextNode(String.fromCharCode('0x25CF')));

      document.body.appendChild(fag);
      tokey[i] = false;
    }
    set_scroll();
    set_width();
    setInterval(drag, 50);
  }
}

function drag() {
  let c;
  if (mousedown) for (c = 0; c < smokeyness; c++) if (tokey[c] === false) {
    toke[c].left = (tokex[c] = x - density / 2) + "px";
    toke[c].top = (tokey[c] = y - density) + "px";
    toke[c].visibility = "visible";
    tokedx[c] = (c % 2 ? 1.5 : -1.5) * Math.random();
    nicotine[c] = 80;
    break;
  }
  for (c = 0; c < smokeyness; c++) if (tokey[c] !== false) smoke_rising(c);
}


document.onmousedown = function () { set_scroll(); if (ie_version) setTimeout('mousedown=true', 51); else mousedown = true; };
document.onmouseup = function () { mousedown = false };

function smoke_rising(i) {
  let cancer;
  tokey[i] -= 4 + i % 3;
  tokex[i] += tokedx[i] - 0.5 + Math.random();
  if (tokey[i] > sdown - density * 2 && tokex[i] > sleft && tokex[i] < sleft + swide - density && (nicotine[i] += 2) < 256) {
    cancer = nicotine[i].toString(16);
    cancer = "#" + cancer + cancer + cancer;
    if (ie_version && ie_version < 10) toke[i].filter = "Glow(Color=" + cancer + ",Strength=" + Math.floor(nicotine[i] / 5) + ")";
    else if (ie_version) toke[i].textShadow = '#000000 0px 0px ' + Math.floor(nicotine[i] / 5) + 'px';
    else toke[i].textShadow = cancer + ' 0px 0px ' + Math.floor(nicotine[i] / 5) + 'px';
    toke[i].top = tokey[i] + "px";
    toke[i].left = tokex[i] + "px";
  }
  else {
    toke[i].visibility = "hidden";
    tokey[i] = false;
  }
}

document.onmousemove = mouse;
function mouse(e) {
  if (e) {
    y = e.pageY;
    x = e.pageX;
  }
  else {
    set_scroll();
    y = event.y + sdown;
    x = event.x + sleft;
  }
}

window.onresize = set_width;
function set_width() {
  let sw_min = 999999;
  let sh_min = 999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
    if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
  }
  if (typeof (self.innerWidth) == 'number' && self.innerWidth) {
    if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
    if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
    if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
  }
  if (sw_min == 999999 || sh_min == 999999) {
    sw_min = 800;
    sh_min = 600;
  }
  swide = sw_min;
  shigh = sh_min;
}

window.onscroll = set_scroll;
function set_scroll() {
  if (typeof (self.pageYOffset) == 'number') {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  }
  else {
    sdown = 0;
    sleft = 0;
  }
}