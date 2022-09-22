
import Swiper, { Navigation, Pagination } from 'swiper';
import { clipText } from './components/clip-text';
import { PopupOpener } from './components/popupOpener';
import { TabsAutomatic } from './components/tabs-auromatic';
import { YmapsInitializer } from './components/yandex';
import { phoneMask } from './components/phone-mask';
import { successTemplate } from './components/success-template';
import { menuOpener } from './components/menu-opener';
import { fixHeader } from './components/fix-header';
import { checkField } from './components/utils';
import { CustomSelect } from './components/custom-select';
import { Fancybox } from "@fancyapps/ui";

const { swiperMode } = require("./components/btns-swiper");
const { tabsOpener } = require("./components/tabs");

Fancybox.bind('[data-fancybox="gallery"]', {
	infinite: false
});

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

	window.addEventListener('load', function() {
		swiperMode('.btns-swiper', options, 740);
	});
	
	window.addEventListener('resize', function() {
		swiperMode('.btns-swiper', options, 740);
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

	const optionsHero = {
		modules: [ Navigation, Pagination],
		slidesPerView: 1,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.hero__right',
			prevEl: '.hero__left',
		},
		pagination: {
			el: ".hero-slider__pagination",
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
	const swiperHero = new Swiper('.hero-slider__swiper', optionsHero);
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
			if (response.ok) {
				// если ответ от сервера 200
				let json =  response.json();		
				json.then(function(data) {
					if(!data.status) {
						  data.errors.forEach(name => document.getElementsByName(name)[0].closest('.comment-form__label').classList.add('comment-form__label--error'))
					  	} else {
						  form.reset(); // очищаем форму
		
						if (popupInstance) popupInstance.close(); // если это был попап, том мы его закрываем и чистим обработчики
						  // создаем попап с саксессом в конце боди
		
						setTimeout(function () {
							  var successTemp = successTemplate('success');
							  document.querySelector('body').insertAdjacentHTML('beforeend', successTemp);
							  popupInstance = new PopupOpener({
								  overlayClass: '[data-popup="success"]',
								  // класс оверлея
								  popupClass: '.popup',
								  //класс попапа
								  closeBtnClass: '.js-close',
								  animationOpenClass: 'fadein',
								  // оба класса пишем без точки, чтобы их потом не чистить
								  animationCloseClass: 'fadeout' // класс анимации совпадает с названием анимации (в идеале), чтобы не путаться.
		
							  });
							  popupInstance.open();
						}, 0);
					}
				})					
			} else {
				if (popupInstance) popupInstance.close(); 
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

		const fieldsToCheck = form.querySelectorAll('.required');
		if (!checkField(fieldsToCheck)) return;

		let formData = new FormData(form);
		var url = form.getAttribute('action');
		ajaxSend(url, formData, form)
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
		if (popupInstance) popupInstance.close();
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
		if (popupInstance) popupInstance.close();
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


try {
	menuOpener();
	fixHeader();
} catch(e) {
	console.log(e)
}


try {
	const selectsToPretify = document.querySelectorAll('.pretty-select');
	if (selectsToPretify.length > 0 && window.matchMedia("(min-width: 800px)").matches) {
		selectsToPretify.forEach(select => new CustomSelect(select, 'custom-select'));
	}
}catch(e) {console.log(e)}