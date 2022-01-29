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

// PLAYER LOGIC
const currentSongNumber = document.querySelector('.currentSongNumber');
const previous = document.querySelector('.prevBtn');
const justPlay = document.querySelector('.playBtn');
const next = document.querySelector('.nextBtn');

const audio1 = new Audio('./main-page-src-files/music-files/music1.mp3');
const audio2 = new Audio('../main-page-src-files/music-files/music2.mp3');

let audioList = [audio1, audio2];

let isPlaying = false;
let currentSong = 0;
let totalCount = audioList.length;

audioList[currentSong].addEventListener('ended', nextSong);

previous.addEventListener('click', prevSong);

function prevSong(){
    pauseTrack();
    audioList[currentSong].currentTime = 0;
    currentSong -= 1;
    if (currentSong < 0) currentSong = totalCount-1;
    playTrack();
}

next.addEventListener('click', nextSong);

function nextSong(){
    pauseTrack();
    audioList[currentSong].currentTime = 0;
    currentSong += 1;
    if (currentSong > totalCount-1) currentSong = 0;
    playTrack();
}

justPlay.addEventListener('click', ()=>{
    if (isPlaying) { pauseTrack(); }
    else { playTrack(); }
});

function pauseTrack(){
    isPlaying = false;
    audioList[currentSong].pause();
    justPlay.innerHTML = '<i class="fas fa-play"></i>';
}
function playTrack(){
    isPlaying = true;
    audioList[currentSong].play();
    justPlay.innerHTML = '<i class="fas fa-pause"></i>';
}



// NAVIGATION MENU
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


var smokeyness=100;
var density=40;

var swide=800;
var shigh=600;
var toke=new Array();
var tokex=new Array();
var tokedx=new Array();
var tokey=new Array();
var nicotine=new Array();
var mousedown=false;
var x=400;
var y=300;
var sleft=sdown=0;
var ie_version=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(puff);

function puff() { if (document.getElementById) {
  var i, fag;
  for (i=0; i<smokeyness; i++) {
    fag=document.createElement("div");
    toke[i]=fag.style;
    toke[i].position="absolute";
    toke[i].backgroundColor="transparent";
    toke[i].font="bold "+density+"px Tahoma, Geneva, sans-serif";
    toke[i].color="rgba(234,234,234,0.033)";
    toke[i].zIndex="9999";
    toke[i].pointerEvents="none";
    toke[i].visibility="hidden";
    fag.appendChild(document.createTextNode(String.fromCharCode('0x25CF')));

    document.body.appendChild(fag);
    tokey[i]=false;
  }
  set_scroll();
  set_width();
  setInterval(drag, 25);
}}

function drag() {
  var c;
  if (mousedown) for (c=0; c<smokeyness; c++) if (tokey[c]===false) {
    toke[c].left=(tokex[c]=x-density/2)+"px";
    toke[c].top=(tokey[c]=y-density)+"px";
    toke[c].visibility="visible";
    tokedx[c]=(c%2?1.5:-1.5)*Math.random();
    nicotine[c]=80;
    break;
  }
  for (c=0; c<smokeyness; c++) if (tokey[c]!==false) smoke_rising(c);
}


document.onmousedown=function(){set_scroll();if(ie_version)setTimeout('mousedown=true', 51);else mousedown=true;};
document.onmouseup=function(){mousedown=false};

function smoke_rising(i) {
  var cancer;
  tokey[i]-=4+i%3;
  tokex[i]+=tokedx[i]-0.5+Math.random();
  if (tokey[i]>sdown-density*2 && tokex[i]>sleft && tokex[i]<sleft+swide-density && (nicotine[i]+=2)<256) {
    cancer=nicotine[i].toString(16);
    cancer="#"+cancer+cancer+cancer;
    if (ie_version && ie_version<10) toke[i].filter="Glow(Color="+cancer+",Strength="+Math.floor(nicotine[i]/5)+")";
    else if (ie_version) toke[i].textShadow='#000000 0px 0px '+Math.floor(nicotine[i]/5)+'px';
    else toke[i].textShadow=cancer+' 0px 0px '+Math.floor(nicotine[i]/5)+'px';
    toke[i].top=tokey[i]+"px";
    toke[i].left=tokex[i]+"px";
  }
  else {
    toke[i].visibility="hidden";
    tokey[i]=false;
  }
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}