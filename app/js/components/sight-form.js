const ColorSchemes = {
    normal: "html--normal",
    blue: "html--blue",
    green: "html--green",
    white: "html--white",
    dark: "html--dark"
};

const PicturesOn = {
    on: 'picture',
    off: 'no-picture',
};

export function colorSwitcher() {
    const form = document.querySelector('.sight__form');
    const minusFont = form.querySelector('.sight__label--font');
    const htmlElt = document.querySelector('html');
    const colorChangers = form.querySelectorAll('[name="img"]');
    const pictureChangers = form.querySelectorAll('[name="img"]');
    let currColorScheme = ColorSchemes.normal;
    let currentPictures = PicturesOn.on;

    const fontSize = window.getComputedStyle(htmlElt).fontSize;
    let currSize = parseInt(fontSize.slice(0, fontSize.length - 2));

    const fontHandler = (evt) => {
        if (evt.target.closest('.switcher')) {
            if (evt.target.dataset.font === 'minus') {
                currSize -= 1;
            }  else {
                currSize += 1;
            }
            htmlElt.style.fontSize = `${currSize}px`;
        }
    }

    

    const colorHandler = (evt) => {
        console.log(htmlElt.getAttribute("class"))
        const colorScheme = evt.target.value;
        switch (colorScheme) {
            case 'white':
                currColorScheme = ColorSchemes.white;
                htmlElt.setAttribute("class",[currColorScheme, currentPictures]);
              break;
            case 'green':
                currColorScheme = ColorSchemes.green;
                htmlElt.setAttribute("class",[currColorScheme, currentPictures]);
              break;
            case 'blue':
                currColorScheme = ColorSchemes.blue;
                htmlElt.setAttribute("class",[currColorScheme, currentPictures]);
              break;
            case 'dark':
                currColorScheme = ColorSchemes.dark;
                htmlElt.setAttribute("class",[currColorScheme, currentPictures]);
              break;
            case 'normal':
                currColorScheme = ColorSchemes.normal;
                htmlElt.setAttribute("class",[currColorScheme, currentPictures]);
                break;
        }

    };

    colorChangers.forEach(color => color.addEventListener('click', colorHandler));
    minusFont.addEventListener('click', fontHandler);
}