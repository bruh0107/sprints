const burgerMenu = document.querySelector('.burger-menu')

const toggleModal = () => {
    burgerMenu.classList.toggle('_open')
};
window.onresize = () => {
    if (document.documentElement.getBoundingClientRect().width > 1050 && burgerMenu.classList.contains('_open')){
        toggleModal()
    }
}

//слайдер

let sliderBtnFirst = document.getElementById('slider1')
let sliderBtnSecond = document.getElementById('slider2')
let sliderBtnThird = document.getElementById('slider3')
let slideFirst = document.querySelector('.work-wrapper__block:nth-child(1)')
let slideSecond = document.querySelector('.work-wrapper__block:nth-child(2)')
let slideThird = document.querySelector('.work-wrapper__block:nth-child(3)')
let ruLangBtn = document.getElementById('ru-btn')
let enLangBtn = document.getElementById('en-btn')

sliderBtnFirst.onclick = () => {
    slideFirst.style.translate = '0 0'
    slideSecond.style.translate = '0 0'
    slideThird.style.translate = '0 0'

    sliderBtnFirst.classList.replace('work-scroll_white', 'work-scroll_blue')
    sliderBtnSecond.classList.replace('work-scroll_blue', 'work-scroll_white')
    sliderBtnThird.classList.replace('work-scroll_blue', 'work-scroll_white')

}
sliderBtnSecond.onclick = () =>{
    slideFirst.style.translate = '-100% 0'
    slideSecond.style.translate = '-100% 0'
    slideThird.style.translate = '-100% 0'

    sliderBtnFirst.classList.replace('work-scroll_blue', 'work-scroll_white')
    sliderBtnSecond.classList.replace('work-scroll_white', 'work-scroll_blue')
    sliderBtnThird.classList.replace('work-scroll_blue', 'work-scroll_white')

}
sliderBtnThird.onclick = () => {
    slideFirst.style.translate = '-200% 0'
    slideSecond.style.translate = '-200% 0'
    slideThird.style.translate = '-200% 0'

    sliderBtnFirst.classList.replace('work-scroll_blue', 'work-scroll_white')
    sliderBtnSecond.classList.replace('work-scroll_blue', 'work-scroll_white')
    sliderBtnThird.classList.replace('work-scroll_white', 'work-scroll_blue')
}

ruLangBtn.onclick = () => {
    ruLangBtn.classList.replace('white-lang', 'blue-lang')
    enLangBtn.classList.replace('blue-lang', 'white-lang')
}
enLangBtn.onclick = () => {
    enLangBtn.classList.replace('white-lang', 'blue-lang')
    ruLangBtn.classList.replace('blue-lang', 'white-lang')
}

const $ = (el) => document.querySelector(el)

const openDescription = (questionNum) => $(`.faq-block:nth-child(${questionNum})`).classList.toggle('open')
