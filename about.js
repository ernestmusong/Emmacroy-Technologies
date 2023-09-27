// SET DATE
const elements = [...document.querySelectorAll(".date")];
elements.forEach((element) => {
  element.innerHTML = new Date().getFullYear();
})

// SIDE-BAR
const sideBar = document.querySelector('.sidebar');
const openBtn = document.querySelector('#open');

openBtn.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
//MODAL
const reviewBtn = document.getElementById('review-btn');
const modal = document.querySelector('.popup-overlay');
const closeModal = document.querySelector('#close-modal');
const toggleModal = () => {
  modal.classList.toggle('hide');
}

reviewBtn.addEventListener("click", toggleModal)
closeModal.addEventListener('click', toggleModal)

// SCROLL EFFECT
const navbar = document.getElementById('nav');
const header = document.getElementById('header');
const topLink = document.querySelector('.back-to-top');
const infoWrap = document.querySelector('.info-wrapper');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
    infoWrap.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed-nav');
    infoWrap.classList.remove('fixed');
  }
  if (scrollHeight > 300) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
