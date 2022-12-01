const upBtn = document.querySelector('.controls__btn_up');
const downBtn = document.querySelector('.controls__btn_down');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('.main-slide__image').length;

export {
    upBtn,
    downBtn,
    sidebar,
    container,
    mainSlide,
    slideCount
}