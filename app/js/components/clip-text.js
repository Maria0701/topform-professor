export const clipText = ({btnsClassName, parentEltClass, classForClipped = 'clipped', textEltClass}) => {
    const btns = document.querySelectorAll(btnsClassName);
    if (btns.length === 0) return;

    const mobile = window.matchMedia("(max-width: 700px)");
    const tablet = window.matchMedia("(min-width: 700px)");
    const desktop = window.matchMedia("(min-width: 1000px)");

    const rowsToClip = () => {
        if (mobile.matches) {
            return 12;
        }
        if (tablet.matches) {
            return 6;
        }
        if (desktop.matches) {
            return 4;
        }
    }

    const clipHandler = (evt) => {
        const parent = evt.target.closest(parentEltClass);
        const textElt = parent.querySelector(textEltClass);
        const lineHeight = getComputedStyle(textElt).lineHeight;
  
        textElt.style.maxHeight = `${parseInt(lineHeight) * rowsToClip()}px`

        parent.classList.toggle(classForClipped);

        const flag = parent.classList.contains(classForClipped);

        evt.target.innerHTML = flag ? 'Читать полностью' : 'Свернуть' ;
        textElt.style.maxHeight = flag ? textElt.style.maxHeight : '4000px';
    }

    
    const clipTextInit = (item) => {        
        const parent = item.closest(parentEltClass);
        const textElt = parent.querySelector(textEltClass);
        const lineHeight = getComputedStyle(textElt).lineHeight;
        const textEltHeight = getComputedStyle(textElt).height;

        const maxheight = parseInt(lineHeight) * rowsToClip();
       
        if (parseInt(textEltHeight.substring(0, textEltHeight.length - 2)) <= maxheight) {
            item.style.display = 'none';
            return;
        } else {
            textElt.style.maxHeight = `${maxheight}px`;
            parent.classList.add(classForClipped);
            item.addEventListener('click', clipHandler);
        }
    }

    btns.forEach(btn => {
        clipTextInit(btn);        
    });
}