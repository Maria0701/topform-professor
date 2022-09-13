export const menuOpener = () => {
    const menuToggler = document.querySelector('.js-menu-mobile-button');
    const menu = document.querySelector('.js-menu-mobile');
    let subMenuTogglers;
    let activeSubMenu = null;
    let backItem = null;

    const closeSubMenu = () => {
        activeSubMenu.classList.remove('submenu-opened');
        menu.classList.remove('sub-opened');
        activeSubMenu = null;
    }

    const closeMenuHandler = () => {
        if (activeSubMenu) closeSubMenu();
        document.querySelector('header').classList.remove('opened');
        menuToggler.removeEventListener('click', closeMenuHandler);
        menuToggler.addEventListener('click', openMenuHandler);
        subMenuTogglers.forEach(item => item.removeEventListener('click', subMenuHandler));
    }

    const subMenuHandler = (evt) => {
        evt.preventDefault();
        if (activeSubMenu) closeSubMenu();
        activeSubMenu = evt.target.closest('.header-menu__item').querySelector('.inner-menu');
        if (!activeSubMenu) return;
        backItem = menu.querySelector('.btn-menu-back');
        menu.classList.add('sub-opened');        
        activeSubMenu.classList.add('submenu-opened');
        backItem.addEventListener('click', closeSubMenu);
    }

    const openMenuHandler = (evt) => {
        evt.preventDefault();
        document.querySelector('header').classList.add('opened');
        
        subMenuTogglers = menu.querySelectorAll('.js-submenu');
        subMenuTogglers.forEach(item => item.addEventListener('click', subMenuHandler));
        menuToggler.removeEventListener('click', openMenuHandler);
        menuToggler.addEventListener('click', closeMenuHandler);
    }

    menuToggler.addEventListener('click', openMenuHandler);
}