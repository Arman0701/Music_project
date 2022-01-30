"use strict"

const refreshChillZone = document.querySelector(".header_chill_zone1");

function refresh(){
   let ref = window.location.reload();
   return setTimeout(ref(),10000);

};

refreshChillZone.addEventListener("click",refresh);