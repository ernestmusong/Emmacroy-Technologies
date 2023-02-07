// data for all cards
const reviews = [
  {
    id: 1,
    name: 'Mbah denzel',
    profession: `Lorem ipsum dolor sit amet consectetur adipisicing`,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/denzel.jpg',
  },
  {
    id: 2,
    name: 'Derick dice sk',
    profession: `Lorem ipsum dolor sit amet consectetur adipisicing`,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/derick.jpg',
  },
  {
    id: 3,
    name: 'katche elvis',
    profession: `Lorem ipsum dolor sit amet consectetur adipisicing`,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/elvis.jpg',
  },
  {
    id: 4,
    name: 'louis katche',
    profession: `Lorem ipsum dolor sit amet consectetur adipisicing`,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/louis.jpg',
  },
  {
    id: 5,
    name: 'katche festus',
    profession: `Lorem ipsum dolor sit amet consectetur adipisicing`,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/festus.jpg',
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
const reviewsDom = document.querySelector('.reviews-wrap')
let result = '';

// DISPLAYING REVIEWS
const displayReviews = (reviews) => {
  let featureReviews = reviews.slice(reviews.length-3, reviews.length)
  featureReviews.map((item) => {
    result += `
    <div class="review">
        <div class="reviewer-img-wrap">
            <img src=${item.img} alt="">
        </div>
        <div class="review-text">
            <h5>${item.name}</h5>
            <h5 class="orange-text">${item.profession}</h5>
            <div class="underline"></div>
            <p>${item.text}</p>
        </div>
   </div>
  `;
    return result;
  });
  reviewsDom.innerHTML = result;
  return result;
};

document.addEventListener('DOMContentLoaded', () => {
  displayReviews(reviews)
});