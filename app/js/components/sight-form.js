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
    let currSize;
    let currColorScheme;
    let currentPictures;
    const storage = JSON.parse(sessionStorage.getItem('professorSight'));
    const form = document.querySelector('.sight__form');
    const minusFont = form.querySelector('.sight__label--font');
    const htmlElt = document.querySelector('html');
    const colorChangers = form.querySelectorAll('[name="color"]');
    const pictureChangers = form.querySelectorAll('[name="img"]');
   
    const fontSize = window.getComputedStyle(htmlElt).fontSize;

    const attrHandler = ({color = currColorScheme, picture = currentPictures}) => {
        return htmlElt.setAttribute("class",`${color} ${picture}`);
    }

    const updateStorage = () => {
        return sessionStorage.setItem('professorSight', JSON.stringify({
            font: currSize,
            color: currColorScheme,
            pictures: currentPictures
        }));
    }

    if (storage) {
        currSize = storage.font;
        currColorScheme = storage.color;
        currentPictures = storage.pictures;
        attrHandler({color: currColorScheme, picture: currentPictures})
        htmlElt.style.fontSize = `${currSize}px`;
    } else {
        currSize = parseInt(fontSize.slice(0, fontSize.length - 2));
        currColorScheme = ColorSchemes.normal;
        currentPictures = PicturesOn.on;
        updateStorage();
    }
    
    
    
    const fontHandler = (evt) => {
        if (evt.target.closest('.switcher')) {
            if (evt.target.dataset.font === 'minus') {
                currSize -= 1;
            }  else {
                currSize += 1;
            }
            updateStorage();
            htmlElt.style.fontSize = `${currSize}px`;
        }
    }
 
    const pictureHandler = (evt) => {
        currentPictures = evt.target.value === 'yes'
            ? PicturesOn.on
            : PicturesOn.off;            
        updateStorage();
        return attrHandler({picture: currentPictures});
    }
    

    const colorHandler = (evt) => {
        const colorScheme = evt.target.value;
        switch (colorScheme) {
            case 'white':
                currColorScheme = ColorSchemes.white;
              break;
            case 'green':
                currColorScheme = ColorSchemes.green;
              break;
            case 'blue':
                currColorScheme = ColorSchemes.blue;
              break;
            case 'dark':
                currColorScheme = ColorSchemes.dark;
              break;
            case 'normal':
                currColorScheme = ColorSchemes.normal;
                break;
        }

        updateStorage();
        return attrHandler({color: currColorScheme});
    };

    pictureChangers.forEach(picture => picture.addEventListener('click', pictureHandler));
    colorChangers.forEach(color => color.addEventListener('click', colorHandler));
    minusFont.addEventListener('click', fontHandler);
}