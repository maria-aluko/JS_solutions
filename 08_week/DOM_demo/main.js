const backToTop = document.querySelector('#backTopBtn');
const mobBtn = document.querySelector('.mobile');
const navList = document.querySelector('nav ul');
const modalButton = document.querySelector('.modalBtn')
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.closeBtn')

backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').style.backgroundColor = "orange";
    document.querySelector('header .logo h1').style.fontSize = "12px";
  } else {
    document.querySelector('header').style.backgroundColor = "transparent";
    document.querySelector('header .logo h1').style.fontSize = "32px";
  }
}

const toggleMenu = () => {
  navList.classList.toggle('responsive');
}

const toggleModal = () => {
  overlay.classList.toggle('visible');
}

mobBtn.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleModal);
modalButton.addEventListener('click', toggleModal);