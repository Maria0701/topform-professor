import Swiper, { Navigation, Pagination } from 'swiper';

var init = false;
let mobile;
let defaultOptions = {
    loop: true,
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 16,
};

export const swiperMode = (className, options = defaultOptions, width) => {
    if (width) mobile = width;
    let allWorks = document.querySelectorAll(className);

    const buildSlider = (element, id) => {
        return new Swiper(element, options);
    }

    if (!width) {
        allWorks.forEach((item, id) => {
            const slider = buildSlider(item, id);
        })
    } else {
        if(document.body.clientWidth <= mobile) {
            if (!init) {
                init = true;
                allWorks.forEach((item, id) => {
                    const slider = buildSlider(item, id);
                })
            }
        }
        if (document.body.clientWidth > mobile) {
            allWorks.forEach(function(item) {
                if (item.swiper) item.swiper.destroy(true,true);
            })      
            init = false;
        }         
    }
}

