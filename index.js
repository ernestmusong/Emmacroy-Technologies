// data for all cards
const reviews = [
  {
    id: 1,
    name: 'Mbah denzel',
    profession: 'general manager at All cocoa business, Kumba',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/denzel.jpg',
  },
  {
    id: 2,
    name: 'Derick dice sk',
    profession: 'CEO at Green Engineering and Consultancy, Buea',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/derick.jpg',
  },
  {
    id: 3,
    name: 'katche elvis',
    profession: 'Director at Good Morning Zang Construction',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/elvis.jpg',
  },
  {
    id: 4,
    name: 'louis katche',
    profession: 'Technical Advicer at lT and Services, Limbe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/louis.jpg',
  },
  {
    id: 5,
    name: 'katche festus',
    profession: 'Student at Emmacroy Technologies',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/festus.jpg',
  },
  {
    id: 6,
    name: 'kum paul',
    profession: 'Student at Emmacroy Technologies',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/eleven.jpeg',
  },
  {
    id: 7,
    name: 'Abanda Beckley',
    profession: 'Student at Emmacroy Technologies',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/radivin.jpeg',
  },

];

// SIDE-BAR
const sideBar = document.querySelector('.sidebar');
const openBtn = document.querySelector('#open');

openBtn.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});

// REVIEWS
const reviewsDom = document.querySelector('.reviews-wrap');
let result = '';

// DISPLAYING REVIEWS
const displayReviews = (reviews) => {
  const featureReviews = reviews.slice(reviews.length - 6, reviews.length);
  featureReviews.map((item) => {
    result += `
    <article class="review">
        <div class="reviewer-img-wrap">
            <img src=${item.img} alt="">
        </div>
        <div class="review-text">
            <h5>${item.name}</h5>
            <h5 class="orange-text">${item.profession}</h5>
            <div class="underline"></div>
            <p>${item.text}</p>
        </div>
   </article>
  `;
    return result;
  });
  reviewsDom.innerHTML = result;
  return result;
};

// BACK TO TOP
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 300) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  displayReviews(reviews);
});