import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#slide'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#base'),
});


window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});



const header = document.querySelector('.nav-desk');
let lastScrollY = window.scrollY;

//Digulir header perlahan hilang
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    //scroll ke bawah
    header.style.opacity = '0';
  } else {
    //scroll ke atas
    header.style.opacity = '1';
  }

  lastScrollY = currentScrollY;
});


