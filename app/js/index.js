import Swiper, { Navigation, Pagination } from 'swiper';
import { clipText } from './components/clip-text';
import { TabsAutomatic } from './components/tabs-auromatic';


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

	window.addEventListener('load', function() {
		swiperMode('.btns-swiper', options, 740);
	});
	
	window.addEventListener('resize', function() {
		swiperMode('.btns-swiper', options, 740);
	});


} catch(e) {
	console.log(e)
}

// свайпер для слайдера включено. Опции можно использовать во всех подобных свайперах
try {
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
	const swiper = new Swiper('.includes-swiper', optionsIncluded);	  

} catch(e) {
	console.log(e)
}

// обрезает текст комментариев
try {
	clipText({
		btnsClassName: '.review__btn', 
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