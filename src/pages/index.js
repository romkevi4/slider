import {
    upBtn,
    downBtn,
    sidebar,
    container,
    mainSlide,
    slideCount
} from '../utils/constants.js';

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