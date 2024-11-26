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

window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    scrollToTopBtn.classList.remove('hidden');
  } else {
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme', 'dark:shadow-white/20')
    navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
     scrollToTopBtn.classList.add('hidden');
  }

 
}
);

// Hide the preloader after the page has fully loaded


// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* light mode and dark mode */
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
  matchMedia('(prefers-color-scheme: dark)'.matches))) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
  
function toggleTheme() {
  document.documentElement.classList.toggle('dark')
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme ='dark'
  } else {
    localStorage.theme ='light'
    
  }
}