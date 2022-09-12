
import Swiper, { Navigation, Pagination } from 'swiper';
import { clipText } from './components/clip-text';
import { PopupOpener } from './components/popupOpener';
import { TabsAutomatic } from './components/tabs-auromatic';
import { YmapsInitializer } from './components/yandex';
import { phoneMask } from './components/phone-mask';
import { successTemplate } from './components/success-template';

const { swiperMode } = require("./components/btns-swiper");
const { tabsOpener } = require("./components/tabs");
/*
try {
document.addEventListener("DOMContentLoaded", () => {

	const header = document.querySelector(".header:not(.header--fixed)");
	const heightHeader = header.offsetHeight;
	const main = document.querySelector(".main");

	headerFixed();

	window.addEventListener("scroll", headerFixed, false);

	function headerFixed() {
		const heightOffset = window.pageYOffset;

		if (heightOffset > 0) {
			main.style.paddingTop = `${heightHeader}px`;
			header.classList.add("header--fixed");
		} else if(heightOffset == 0) {
			main.style.paddingTop = 0;
			header.classList.remove("header--fixed");
		}
	}

	const swiperHero = new Swiper('.hero-slider', {
		slidesPerView: 1,
		pagination: {
			el: ".hero .swiper-pagination",
		},
		navigation: {
			nextEl: ".hero .swiper-button-next",
			prevEl: ".hero .swiper-button-prev",
		},
	});

	const swiperStock = new Swiper('.stock-slider', {
		loop: true,
        spaceBetween: 16,
		slidesPerView: "auto",
		navigation: {
			nextEl: ".stock .swiper-button-next",
			prevEl: ".stock .swiper-button-prev",
		},
		breakpoints: {
			640: {
				spaceBetween: 53,
			}
		}
	});

	const swiperSpec = new Swiper('.spec-slider', {
        spaceBetween: 16,
		slidesPerView: "auto",
		navigation: {
			nextEl: ".benefits .swiper-button-next",
			prevEl: ".benefits .swiper-button-prev",
		},
		breakpoints: {
			640: {
				spaceBetween: 53,
				slidesPerView: 4,
			}
		}
	});

	const swiperReviews = new Swiper('.reviews-slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: ".reviews .swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".reviews .swiper-button-next",
			prevEl: ".reviews .swiper-button-prev",
		},
	});

	(function() {
		const btnMenuMobile = document.querySelector(".js-menu-mobile-button");
		const menuMobile = document.querySelector(".js-menu-mobile")
		const iconMenu = document.querySelector(".icon-menu")
		const iconCancel = document.querySelector(".icon-cancel")
		let isOpened = false;

		btnMenuMobile.addEventListener("touchend", (event)=>{
			if (isOpened) {
				menuMobile.classList.remove("is-open");
				iconMenu.style.display = "block";
				iconCancel.style.display = "none";
				isOpened = false;
			} else {
				menuMobile.classList.add("is-open");
				iconMenu.style.display = "none";
				iconCancel.style.display = "block";
				isOpened = true;
			}
		});
	})();

	(function() {
		const headerInnerItems = document.querySelectorAll(".header-menu__item--inner");
		const innerMenus = document.querySelectorAll(".inner-menu");
		const headerWrapper = document.querySelector(".header-menu__wrap");
		const headerBack = document.querySelector(".header-menu-back");
		const headerBackBtn = document.querySelector(".btn-menu-back");

		headerInnerItems.forEach((item) => {
			item.addEventListener("touchend", function(event) {
				event.stopPropagation();

				const innerMenu = event.currentTarget.querySelector(".inner-menu");
				const heightInnerMenu = innerMenu.offsetHeight;

				headerWrapper.style.height = `${heightInnerMenu}px`;
				headerBack.style.display = "block";
			});
		});

		headerBackBtn.addEventListener("touchend", function(event) {
			headerWrapper.style.height = "auto";
			innerMenus.forEach((innerMenu) => {
				innerMenu.classList.remove("is-show");
			});
			headerBack.style.display = "none";
			event.stopPropagation();
		}, false);
	})();

	(function() {
		const headerInnerItem = document.querySelector(".header-menu__item--inner");

		headerInnerItem.addEventListener("mouseenter", (event)=>{
			const innerMenu = event.currentTarget.querySelector(".inner-menu");
			innerMenu.classList.add("is-show");
		});
		headerInnerItem.addEventListener("touchend", (event)=>{
			if (event.currentTarget.classList.contains("header-menu__item--inner")) {
				const innerMenu = event.currentTarget.querySelector(".inner-menu");
				innerMenu.classList.add("is-show");
			}
		});
		headerInnerItem.addEventListener("mouseleave", (event)=>{
			const innerMenu = event.currentTarget.querySelector(".inner-menu");
			innerMenu.classList.remove("is-show");
		});
	})();

	(function() {
		const buttons = document.querySelectorAll(".js-service-tab-item");
		const sections = document.querySelectorAll(".js-service-tab-content");

		buttons.forEach((btn)=> {
			btn.addEventListener("click", ()=>{
				buttons.forEach((btn)=>{
					btn.classList.remove("is-active");
				});
				btn.classList.add("is-active");
				const tabName = btn.id;
				sections.forEach((section)=>{
					section.classList.remove("is-active");
				});
				const req = document.getElementsByClassName(`${tabName}`);
				req[0].classList.add("is-active");
			})
		})
	})();
});
} catch(e) {
	console.log(e);
}*/
try {
	tabsOpener('.js-tabs');
} catch(e) {
	console.log(e)
}

try {
	const options = {
		slidesPerView: "auto",
        spaceBetween: 16,
	};

	const optionsDoctors = {
		slidesPerView: "auto",
        spaceBetween: 16,
		loop: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
			  spaceBetween: 16
			},
			740: {
			  spaceBetween: 40
			},
			1200: {
				slidesPerView: 4,
			  spaceBetween: 53
			}
		},
	};

	window.addEventListener('load', function() {
		swiperMode('.btns-swiper', options, 740);
	});
	
	window.addEventListener('resize', function() {
		swiperMode('.btns-swiper', options, 740);
	});

	window.addEventListener('load', function() {
		swiperMode('.doctors-page__swiper',optionsDoctors);
	});


} catch(e) {
	console.log(e)
}


try {
	// свайпер для слайдера включено. Опции можно использовать во всех подобных свайперах
	
	const optionsIncluded = {
		modules: [ Navigation],
		slidesPerView: "auto",
        spaceBetween: 16,
		loop: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
			  spaceBetween: 16
			},
			740: {
			  spaceBetween: 30
			},
			1200: {
			  spaceBetween: 53
			}
		},
		navigation: {
			nextEl: '.includes-block__right',
			prevEl: '.includes-block__left',
		}
	};

	const optionsPromo = {
		modules: [ Navigation],
		slidesPerView: "auto",
        spaceBetween: 16,
		loop: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
			  spaceBetween: 16
			},
			740: {
			  spaceBetween: 30
			},
			1200: {
			  spaceBetween: 53
			}
		},
		navigation: {
			nextEl: '.promo-block__right',
			prevEl: '.promo-block__left',
		}
	};

	const optionsDoctors = {
		modules: [ Navigation],
		slidesPerView: "auto",
        spaceBetween: 16,
		loop: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
			  spaceBetween: 16
			},
			740: {
			  spaceBetween: 40
			},
			1200: {
			  spaceBetween: 53
			}
		},
		navigation: {
			nextEl: '.doctors__right',
			prevEl: '.doctors__left',
		}
	};

	const optionsReviews = {
		modules: [ Navigation, Pagination],
		slidesPerView: 1,
        spaceBetween: 16,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.review-slider__right',
			prevEl: '.review-slider__left',
		},
		pagination: {
			el: ".review-slider__fractions",
			type: "fraction",
		},
	};

	const optionsHistory = {
		slidesPerView: "auto",
        spaceBetween: 16,
		loop: false,
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
			  spaceBetween: 16
			},
			740: {
			  spaceBetween: 36
			},
		},
	};

	const swiper = new Swiper('.includes-swiper', optionsIncluded);
	const swiperDoctors = new Swiper('.doctors__swiper', optionsDoctors);
	const swiperPromo = new Swiper('.promo-block__swiper', optionsPromo);
	const swiperReviews = new Swiper('.review-slider__swiper', optionsReviews);	  
	const swiperHistory = new Swiper('.history__swiper', optionsHistory);	  

} catch(e) {
	console.log(e)
}

// обрезает текст комментариев
try {
	clipText({
		btnsClassName: '.js-cliptext', 
		parentEltClass: '.review', // элемент должен быть родителем кнопки
		classForClipped:'clipped', //этот элемент указываем без точки
		textEltClass:'.review__text',
	})
} catch(e) {
	console.log(e);
}

// открытие горизонтальных табов
try {
		var tablists = document.querySelectorAll('[role=tablist]');
		if (tablists.length > 0) {
		for (var i = 0; i < tablists.length; i++) {
		  new TabsAutomatic(tablists[i]);
		}
  }
} catch (e) {
	console.log(e);
}

// запускаем карту 
try {
	const mapContainer = document.querySelector('.js-map');
	if (mapContainer) {
		const coords = {
			coords: [mapContainer.dataset.fort, mapContainer.dataset.long],
			name: mapContainer.dataset.name,
			description: mapContainer.dataset.description,
		};

	  	new YmapsInitializer(mapContainer, coords);
	}
} catch(e) {
	console.log(e);
}

// обработка popup 
try {
	const appointmentOpeners = document.querySelectorAll('[data-action="appointment"]');
	const popupAppointmentElt = document.querySelector('[data-popup="appointment"]');
	const questionOpeners = document.querySelectorAll('[data-action="question"]');
	const popupQuestionElt = document.querySelector('[data-popup="question"]');
	const forms = document.querySelectorAll('.comment-form');
	let popupInstance = null;

	// обработчик отправки формы на сервер
	const ajaxSend = (url, formData, form) => {
		return fetch(url, {
			method: 'POST',
			body: formData,
		})
		.then(response => {
			if (response.ok) { // если ответ от сервера 200
				form.reset(); // очищаем форму
				if (popupInstance) popupInstance.close(); // если это был попап, том мы его закрываем и чистим обработчики
				// создаем попап с саксессом в конце боди					
				setTimeout(() => {
					const successTemp = successTemplate('success');
					document.querySelector('body').insertAdjacentHTML('beforeend', successTemp);
					popupInstance = new PopupOpener({						
						overlayClass: '[data-popup="success"]', // класс оверлея
						popupClass: '.popup', //класс попапа
						closeBtnClass: '.js-close',
						animationOpenClass: 'fadein', // оба класса пишем без точки, чтобы их потом не чистить
						animationCloseClass: 'fadeout', // класс анимации совпадает с названием анимации (в идеале), чтобы не путаться. 
					});
					popupInstance.open();
				},0);				
			} else {
				setTimeout(() => {
					// добавляем форму с ошибкой в конец боди
					const successTemp = successTemplate('failure');
					document.querySelector('body').insertAdjacentHTML('beforeend', successTemp);
					popupInstance = new PopupOpener({
						overlayClass: '[data-popup="failure"]', // класс оверлея
						popupClass: '.popup', //класс попапа
						closeBtnClass: '.js-close',
						animationOpenClass: 'fadein', // оба класса пишем без точки, чтобы их потом не чистить
						animationCloseClass: 'fadeout', // класс анимации совпадает с названием анимации (в идеале), чтобы не путаться. 
					});
					popupInstance.open();
				},0);	
			}			
		})
		.catch(err => {
			// любой обработчик ошибок на ваше усмотрение
			console.log(err);
		})
	}

	const formSubmithandler = (evt) => {
		evt.preventDefault();
		const form = evt.target;

		let formData = new FormData(form);
		ajaxSend('https://jsonplaceholder.typicode.com/posts', formData, form)
			.then((response) => {

			})
			.catch((err) => {
				/* логика ошибки */
				console.log(err);
			})
			.finally(() => {

			})
	};

	if (forms.length > 0) {
		forms.forEach(form => form.addEventListener('submit', formSubmithandler));
	};

	// открытие popup с записью
	if (popupAppointmentElt && appointmentOpeners.length > 0) {

		const openHandler = (evt) => {
			evt.preventDefault();
			popupInstance = new PopupOpener({
				openElt: evt.target, // элемент, по которому открываем попап
				overlayClass: '[data-popup="appointment"]', // класс оверлея
				popupClass: '.popup', //класс попапа
				closeBtnClass: '.js-close',
				animationOpenClass: 'fadein', // оба класса пишем без точки, чтобы их потом не чистить
				animationCloseClass: 'fadeout', // класс анимации совпадает с названием анимации (в идеале), чтобы не путаться. 
			});
	
			popupInstance.open();
		}
		appointmentOpeners.forEach(opener => opener.addEventListener('click', openHandler));
	}

	// открытие popup с вопросом
	if (popupQuestionElt && questionOpeners.length > 0) {

		const openHandler = (evt) => {
			evt.preventDefault();
			popupInstance = new PopupOpener({
				openElt: evt.target, // элемент, по которому открываем попап
				overlayClass: '[data-popup="question"]', // класс оверлея
				popupClass: '.popup', //класс попапа
				closeBtnClass: '.js-close',
				animationOpenClass: 'fadein', // оба класса пишем без точки, чтобы их потом не чистить
				animationCloseClass: 'fadeout', // класс анимации совпадает с названием анимации (в идеале), чтобы не путаться. 
			});
	
			popupInstance.open();
		}
		questionOpeners.forEach(opener => opener.addEventListener('click', openHandler));
	}

} catch(e) {
	console.log(e);
}

try {
    const phoneInputs = document.querySelectorAll('[type="tel"]');
    if (phoneInputs.length) {
      phoneInputs.forEach(item => phoneMask(item));
    }
} catch(e) {
    console.log(e);
}

