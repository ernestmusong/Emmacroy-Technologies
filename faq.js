const accordions = [
    {
      question: 'First question',
      answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos
      incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi,
      sapiente, nostrum`,
      isOpen: false,
    },
    {
      question: 'Second question',
      answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti molestias necessitatibus quaerat quos
      incidunt! Quas officiis repellat dolore omnis nihil quo, ratione cupiditate! Sed, deleniti, recusandae! Animi,
      sapiente, nostrum`,
      isOpen: false,
    }
  ]

  // SIDE-BAR
const sideBar = document.querySelector('.sidebar');
const openBtn = document.querySelector('#open');

openBtn.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});

// BACK TO TOP
const navbar = document.getElementById('nav');
const header = document.getElementById('header');
const topLink = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
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


  const displayAccordions = (arr) => {
    let accordionsContainer = document.querySelector('.accordions')
    let result = ''
    arr.map((item) => {
      const {question, answer, isOpen} = item;
      const index = arr.indexOf(item)
      item.id = index
      const button = isOpen ? `<button class="open-acc" onclick="closeAccordion(${item.id})">-</button>` :
       ` <button class="close-acc" onclick="openAccordion(${item.id})">+</button>`
       const myClass  = isOpen ? 'answer' : 'hide';
      result += `
      <div class="accordion-item">
        <div class="question">
        <p>${question}</p>
          ${button}
        </div>
        <div id="${item.id}" class=${myClass}>
            <p>${answer}</p>
        </div>
      </div> 
      `
      return result
    })
    accordionsContainer.innerHTML = result;
    return result;
  }
  
  const openAccordion = (id) => {
    const openedItem = accordions.find((acc) => acc.isOpen === true);
    if ( openedItem) {
        openedItem.isOpen = false;  
    }
    const item = accordions[id]
    item.isOpen = true;
    displayAccordions(accordions);
  }
  
  const closeAccordion = (id) => {
    const item = accordions[id]
    item.isOpen = false;
    displayAccordions(accordions);
  }

  document.addEventListener('DOMContentLoaded', () => {
    displayAccordions(accordions);
    console.log(accordions)
  });
  
  