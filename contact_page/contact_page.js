"use strict"

const submitBtn = document.querySelector('.submit');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

submitBtn.addEventListener("click", ()=>{
   clear();
   setTimeout(()=>{
      submitBtn.innerHTML = `<i class="far fa-check-circle"></i>Your review has been sent`;
      setTimeout(()=>{
         submitBtn.innerHTML = 'SEND';
      }, 2700);
   }, 1000);
});

function clear(){
   inputs.forEach(elem => {
      elem.value = '';
   });
   textarea.value = '';
}

const navigationMain = document.querySelector('.navigationMain');
navigationMain.addEventListener("click", ()=>{
    document.querySelector('.menuWrapper').classList.remove('closeNavMenu');
    document.querySelector('.menuWrapper').classList.add('loadingNavMenu');
    document.querySelector('.allContent').style.display = 'none';
    document.querySelector('.menuWrapper').style.display = 'block';
})

const navMenuButton = document.querySelector('.navMenu');
navMenuButton.addEventListener("click", ()=>{
    document.querySelector('.menuWrapper').classList.remove('loadingNavMenu');
    document.querySelector('.menuWrapper').classList.add('closeNavMenu');
    setTimeout(()=>{
      document.querySelector('.menuWrapper').style.display = 'none';
      document.querySelector('.allContent').style.display = 'block';
    }, 1950);
});

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

