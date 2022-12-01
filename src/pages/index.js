import {
    upBtn,
    downBtn,
    sidebar,
    container,
    mainSlide,
    slideCount,
    letter,
    icons
} from '../utils/constants.js';

import './index.css';

import arrowDown from '../images/arrow-down-icon.svg';
import arrowUp from '../images/arrow-up-icon.svg';


const arrows = [
    { name: 'Arrow Down', image: arrowDown },
    { name: 'Arrow Up', image: arrowUp }
];

icons[0].src = arrows[0].image;
icons[1].src = arrows[1].image;

letter.forEach(elem => {
    elem.addEventListener('mouseenter', () => elem.classList.add('rubberBand', 'animated'));

    elem.addEventListener('mouseleave', () => {
        setTimeout(() => elem.classList.remove('rubberBand', 'animated'), 500);
    });
});

let activeSlideIndex = 0;
sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

document.addEventListener('keydown', evt => {
    if (evt.key === 'ArrowUp') {
        changeSlide('up');

    } else if (evt.key === 'ArrowDown') {
        changeSlide('down');
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        activeSlideIndex === slideCount && (activeSlideIndex = 0);

    } else if (direction === 'down') {
        activeSlideIndex--;
        activeSlideIndex < 0 && (activeSlideIndex = slideCount - 1);
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}