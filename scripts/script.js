const burgerMenu = document.querySelector('.burger-menu')

const toggleModal = () => {
    burgerMenu.classList.toggle('_open')
};
window.onresize = () => {
    if (document.documentElement.getBoundingClientRect().width > 1050 && burgerMenu.classList.contains('_open')){
        toggleModal()
    }
}
