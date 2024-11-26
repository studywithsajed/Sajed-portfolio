/* Toggle  Bar Start*/
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTop');
// preloader
// const preloader = document.getElementById('preloader');

function openMenu() {
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  sideMenu.style.transform = 'translateX(16rem)';
}

/* Toggle  Bar End*/

window.addEventListener('scroll','load', () => {
  if (scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm');
    scrollToTopBtn.classList.remove('hidden');
  } else {
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm');
     scrollToTopBtn.classList.add('hidden');
  }

 
}
);

// Hide the preloader after the page has fully loaded
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0'; // Fade-out effect
  setTimeout(() => {
    preloader.style.display = 'none'; // Remove from DOM
  }, 500); // Matches fade-out transition
});


// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
