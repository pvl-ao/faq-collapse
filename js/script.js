'use strict';

const faq = document.querySelector('.faq');
const faqToggle = document.querySelectorAll('.faq-toggle');

// Open/Close FAQ
faqToggle.forEach((element) => {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('active');
  });
});
