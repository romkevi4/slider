import {
    upBtn,
    downBtn,
    sidebar,
    container,
    mainSlide,
    slideCount,
    letter
} from '../utils/constants.js';

console.log(letter);

letter.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
       elem.classList.add('rubberBand', 'animated');
    });

    elem.addEventListener('mouseleave', () => {
        setTimeout(() => elem.classList.remove('rubberBand', 'animated'), 800);
    });
});

let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

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
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0;
        }

    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    console.log(`translateY(-${activeSlideIndex * height}px)`);
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    console.log(`translateY(${activeSlideIndex * height}px)`);
}