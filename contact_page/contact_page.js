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