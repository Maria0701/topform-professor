const menuToggler = document.querySelector('.js-menu-mobile-button');
const menu = document.querySelector('.js-menu-mobile');
let subMenuTogglers;
let activeSubMenu;

const subMenuHandler = (evt) => {
    evt.preventDefault();
    evt.target
}

const openMenuHandler = (evt) => {
    evt.preventDefault();
    menu.classList.add('opened');

    subMenuTogglers = menu.querySelectorAll('.js-submenu');

    subMenuTogglers.forEach(item => item.addEventListener('click', subMenuHandler));
}

menuToggler.addEventListener('click', openMenuHandler);