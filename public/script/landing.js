
// hamburger menu!  
const navBar = document.getElementById('navbar')
const menuBtn = document.querySelector('.menu-btn');


let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navBar.style.left = '0'
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navBar.style.left = '-100%'
    
    
  }
});









console.log('hello people')