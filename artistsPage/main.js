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

const navBarButton = document.querySelector('.header_nav');
navBarButton.addEventListener("click", ()=>{
    document.querySelector('.menuWrapper').classList.remove('closeNavMenu');
    document.querySelector('.menuWrapper').classList.add('loadingNavMenu');
    document.querySelector('.mainPage').style.display = 'none';
    document.querySelector('.menuWrapper').style.display = 'block';
})

const navMenuButton = document.querySelector('.navMenu');
navMenuButton.addEventListener("click", ()=>{
    document.querySelector('.menuWrapper').classList.remove('loadingNavMenu');
    document.querySelector('.menuWrapper').classList.add('closeNavMenu');
    setTimeout(()=>{
      document.querySelector('.menuWrapper').style.display = 'none';
      document.querySelector('.mainPage').style.display = 'block';
    }, 1950);
});

const mainWindow = document.querySelector('.main');
mainWindow.addEventListener('wheel', (event)=>{
    event.preventDefault();
    mainWindow.scrollBy({
        left: event.deltaY < 0 ? -120 : 120,
      });
});