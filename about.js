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
const topNav = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    header.classList.add('fixed');
    topNav.classList.add('hide');
  } else {
    header.classList.remove('fixed');
    topNav.classList.remove('hide');
  }
  if (scrollHeight > 300) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
