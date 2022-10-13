export const tabsOpener = (className) => {
    let togglers = document.querySelectorAll(className);
    if (togglers.length === 0 ) return;
    
    const openHandler = (evt) => {
        evt.preventDefault();
        evt.target.closest(className).parentElement.classList.toggle('closed');
        evt.target.closest(className).parentElement.classList.toggle('opened');
    }

    let observer = new MutationObserver(mutationRecords => {
        togglers.forEach(toggler => toggler.removeEventListener('click', openHandler));
		togglers = document.querySelectorAll(className);
        togglers.forEach(toggler => toggler.addEventListener('click', openHandler));
	});

	observer.observe(togglers[0].closest('main'), {
		childList: true, // наблюдать за непосредственными детьми
		subtree: true, // и более глубокими потомками
	});

    togglers.forEach(toggler => toggler.addEventListener('click', openHandler));
}