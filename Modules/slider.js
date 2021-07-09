import store from './data.js';

const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// set slides
container.innerHTML = store
  .map((shop, slideIndex) => {
    //DESTRUCTURING the object person
    const { img, name } = shop;
    console.log(container);
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === store.length - 1) {
      position = 'last';
    }
    return ` <article class="slide ${position}"> 
                <img src="${img}" alt="${name}">
            </article>`;
  })
  .join('');

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;

    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(['next']);

    next.classList.add('last');
    return;
  }

  active.classList.add('last');
  last.classList.add('next');
  next.classList.add('active');
};

nextBtn.addEventListener('click', () => {
  startSlider();
});
prevBtn.addEventListener('click', () => {
  startSlider('prev');
});

export { container, nextBtn, prevBtn, startSlider };
