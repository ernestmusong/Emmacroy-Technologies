// data for all cards
const reviews = [
  // {
  //   id: 3,
  //   name: 'masala vanela',
  //   profession: 'student',
  //   country: 'Cameroon',
  //   text: `Coding used to be a nightmare for me but thanks to Emmacroy, I'm now a pro in javaScript!
  //   They make coding as easy as possible`,
  //   img: 'images/elvis.jpg',
  //   email: "example@gmail.com"
  // },
  // {
  //   id: 4,
  //   name: 'ndashi brandon',
  //   profession: 'student',
  //   country: 'USA',
  //   text: `I was so passionate about coding worried about where to start.
  //   I was so passionate about coding worried about where to start.
  //   I'm happy I found this place. They make coding really easy to learn.`,
  //   img: 'images/louis.jpg',
  //   email: "example@gmail.com"
  // },
  {
    id: 1,
    name: 'Musong louis',
    profession: 'client',
    country: 'Cameroon',
    text: 'Their timely delivery and quality of work is what I love about them.',
    img: 'images/louis.jpg',
    email: "musonglouis@yahoo.com"
  },
{
  id: 5,
  name: 'njandillo campbello',
  profession: 'student',
  country: 'South Africa',
  text: `In just three weeks, I was able to build a proffessional WordPress website on my own.
  They make it supper easy to learn.`,
  img: 'images/campbello2.jpg',
  email: "martinnjandi@gmail.com"
},
  {
    id: 2,
    name: 'Fornishi okumo',
    profession: 'client',
    country: 'USA',
    text: `What I wanted was what I got, and on time. They're the best in web
    app development.`,
    img: 'images/teks.jpeg',
    email: "Fornishindikumokumo@gmail.com"
  },
   
];

// COUNT UP
// const counters = [...document.querySelectorAll(".value")];
// const updateCount = () => {
//   counters.forEach((counter) => {
//     const increment = () => {
//       counter.innerHTML++;
//     }
//     counter.innerText = 0;
//     const target = +counter.getAttribute("data-target");
//     while (counter.innerHTML < target) {
//       setTimeout(increment, 5);
//     }
//   })};
 
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
 
  //slect items
  const personImg = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const personCountry = document.querySelector('#country')
  const personEmail = document.querySelector('#email')
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  
  //Testimonials
  let currentItem = 0;
  function showPerson(arr) {
      const {img, name, profession, text, email, country } = arr[currentItem];
      personImg.src = img;
      author.textContent = name;
      job.textContent = profession;
      info.textContent = text;
      personEmail.textContent = email;
      personCountry.textContent = country;
  }

 nextPerson = () => {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(reviews)
 }

 prevPerson = () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(reviews)
 }

// SCROLL EFFECTS
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

//MODAL
const reviewBtn = document.getElementById('review-btn');
const modal = document.querySelector('.popup-overlay');
const closeModal = document.querySelector('#close-modal');

const toggleModal = () => {
  modal.classList.toggle('hide');
}
//EBOOK
const ebookLink = document.getElementById('ebook-link');
const ebookModal = document.querySelector('.ebook-overlay');
const ebookModalClose = document.querySelector('#ebook-close-modal');
const ebookBtn = document.querySelector('#ebook-btn');

const toggleEbookModal = () => {
  ebookModal.classList.toggle('hide');
}


document.addEventListener('DOMContentLoaded', () => {
  showPerson(reviews);
});
nextBtn.addEventListener("click", nextPerson);
prevBtn.addEventListener("click", prevPerson);
reviewBtn.addEventListener("click", toggleModal)
closeModal.addEventListener('click', toggleModal)
ebookModalClose.addEventListener('click', toggleEbookModal)
ebookLink.addEventListener('click', toggleEbookModal)
ebookBtn.addEventListener('click', toggleEbookModal)
