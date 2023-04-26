const btnMenu = document.querySelector('#btn_menu');
const btnMenuClose = document.querySelector('#btn_menu_close');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
    menu.classList.replace('left-[-15rem]', 'left-[15rem]');

})

btnMenuClose.addEventListener('click', () => {
    menu.classList.replace('left-[15rem]', 'left-[-15rem]');
})