const accordions = [
  {
    question: 'What is the cost of the Web Development program ?',
    answer: `The cost of studying at Emmacroy Technologies is 300.000cfa
    for the 7-months program, and 350.000cfa for the 9-months program. 
    However, there is an exeption to those who want to study a particular
    language e.g JavaScript only or frontend development. In this case, they
    are charged 50.000cfa per month, and the total amount they will pay will
    depends on the duration of the language(s). Note that, even one day into the
    next month is considered a full month. A month is calculate from the date
    you started to the exact same date into the next month. E.g if you started
    on the 4th of May, then the 4th of June makes one month of study.`,
    isOpen: false,
  },
  {
    question: 'In how many installments can I pay for tuition ?',
    answer: `Students can pay in any number of installments for the full-time
    web development program, but they are required to make a mandatory payment of 150.000cfa or above
    as first installment, and the complete amount must be paid on or before the
    end of the frontend program.`,
    isOpen: false,
  },
  {
    question: 'What is the cost of studying Web Design at Emmacroy Technologies ?',
    answer: `The cost of studying Web Design at Emmacroy Technologies is 150.000cfa,
     payable in three installments, with a mandatory first deposit of 75.000cfa.`,
    isOpen: false,
  },
  {
    question: 'Can I pay for a single course ?',
    answer: `Yes, you can pay to study a single course e.g HTML, CSS, etc... but note that
     you will be charged 50.000cfa per month.`,
    isOpen: false,
  },
  {
    question: 'Will I be issued a certificate upon completion ?',
    answer: `Yes, you will be issued a globally recognised certification
    from freeCodeCamp for every stack you complete.`,
    isOpen: false,
  },
  {
    question: 'I have no previous knowledge in coding, can I join the program ?',
    answer: `Yes, you can join the full-time program or take a single course irrespective of
    your experience level. Remember we build you from Zero to Hero.`,
    isOpen: false,
  },
  {
    question: 'Can I take a break ?',
    answer: `Yes, you're free to take a break whenever you want, but note that we
     only pause studies during official holidays such as Christmas.`,
    isOpen: false,
  },
  {
    question: 'Can I enroll in both web dev and web design ?',
    answer: `Yes, you can enroll in both programs since their time tables don't clash.`,
    isOpen: false,
  },

];

// SET DATE
const elements = [...document.querySelectorAll('.date')];
elements.forEach((element) => {
  element.innerHTML = new Date().getFullYear();
});

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
  const accordionsContainer = document.querySelector('.accordions');
  let result = '';
  arr.map((item) => {
    const { question, answer, isOpen } = item;
    const index = arr.indexOf(item);
    item.id = index;
    const openButton = `<button class="close-acc" onclick="openAccordion(${item.id})">+</button>`;
    const closeButton = `<button class="open-acc" onclick="closeAccordion(${item.id})">-</button>`;
    const button = isOpen ? closeButton : openButton;
    const myClass = isOpen ? 'answer' : 'hide-answer';
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
      `;
    return result;
  });
  accordionsContainer.innerHTML = result;
  return result;
};

const openAccordion = (id) => {
  const openedItem = accordions.find((acc) => acc.isOpen === true);
  if (openedItem) {
    openedItem.isOpen = false;
  }
  const item = accordions[id];
  item.isOpen = true;
  displayAccordions(accordions);
};

const closeAccordion = (id) => {
  const item = accordions[id];
  item.isOpen = false;
  displayAccordions(accordions);
};

const reviewBtn = document.getElementById('review-btn');
const modal = document.querySelector('.popup-overlay');
const closeModal = document.querySelector('#close-modal');
const toggleModal = () => {
  modal.classList.toggle('hide');
};

document.addEventListener('DOMContentLoaded', () => {
  displayAccordions(accordions);
});

reviewBtn.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
