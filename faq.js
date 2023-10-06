const accordions = [
    {
      question: 'What is Emmacroy Technologies cost and tuition ?',
      answer: ``,
      isOpen: false,
    },
    {
      question: 'In how many installments can I pay for tuition ?',
      answer: ``,
      isOpen: false,
    },
    {
      question: 'Can I pay for a single course ?',
      answer: ``,
      isOpen: false,
    },
    {
      question: 'Will I be issued a certificate upon completion ?',
      answer: ``,
      isOpen: false,
    },
    {
      question: 'I have no previous knowledge in coding, can I join the program ?',
      answer: ``,
      isOpen: false,
    },
    {
      question: 'I am not a Cameroonian, can I join the program ?',
      answer: ``,
      isOpen: false,
    },
    {
      question: 'Can I enroll in both web dev and web design?',
      answer: ``,
      isOpen: false,
    },

  ]

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


  const displayAccordions = (arr) => {
    let accordionsContainer = document.querySelector('.accordions')
    let result = ''
    arr.map((item) => {
      const {question, answer, isOpen} = item;
      const index = arr.indexOf(item)
      item.id = index
      let openButton = `<button class="close-acc" onclick="openAccordion(${item.id})">+</button>`;
      let closeButton = `<button class="open-acc" onclick="closeAccordion(${item.id})">-</button>`;
      const button = isOpen ? closeButton : openButton;
      const myClass  = isOpen ? 'answer' : 'hide-answer';
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

  const reviewBtn = document.getElementById('review-btn');
const modal = document.querySelector('.popup-overlay');
const closeModal = document.querySelector('#close-modal');
const toggleModal = () => {
  modal.classList.toggle('hide');
}


document.addEventListener('DOMContentLoaded', () => {
  displayAccordions(accordions);
});
 
reviewBtn.addEventListener("click", toggleModal)
closeModal.addEventListener('click', toggleModal)

  
  