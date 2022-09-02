export const tabsOpener = (className) => {
    const togglers = document.querySelectorAll(className);
    if (togglers.length === 0 ) return;
    const openHandler = (evt) => {
        evt.preventDefault();
        evt.target.closest(className).parentElement.classList.toggle('closed');
        evt.target.closest(className).parentElement.classList.toggle('opened');
    }

    togglers.forEach(toggler => toggler.addEventListener('click', openHandler));
}