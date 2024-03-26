import { PopupOpener } from "./popupOpener";

export const popupEq = () => {
  const allEqElements = document.querySelectorAll('.js-equipment');
  if (!allEqElements.length) return;

  let popup = null;
  let popupInstance = null;
  let innerHtml = null;
  let popupText = null;

  const openHandler = () => {
    popup = document.querySelector('[data-popup="popup-eq"]');
    popupText = popup.querySelector('.popup-eq')
    popupText.innerHTML = innerHtml;
  };
  
  const closeHandler = () => {
    popup.remove();
    popup = null;
    popupInstance = null;
    innerHtml = null;
  };

  const popUpElt = `
  <div class="popup-overlay" data-popup="popup-eq">
    <section class="popup popup--content">
        <div class="popup__wrapper">
            <button class="popup__close js-close">
            <svg width="12" height="12">
                <use xlink:href="../maria/build/img/sprite.svg#cancel"></use>
            </svg>
            </button>
            <div class="popup-eq">
                
            </div>           
        </div>
    </section>
  </div>
  `;

  const openPopupHandler = async (evt) => {
    evt.preventDefault(); 
    innerHtml = evt.target.closest('.js-equipment').innerHTML;  
    document.querySelector('body').insertAdjacentHTML('beforeend', popUpElt);
    popupInstance = new PopupOpener({
      overlayClass: '[data-popup="popup-eq"]', // класс оверлея
      popupClass: '.popup', //класс попапа
      closeBtnClass: '.js-close',
      animationOpenClass: 'fadein', // оба класса пишем без точки, чтобы их потом не чистить
      animationCloseClass: 'fadeout', // класс анимации совпадает с названием анимации (в идеале), чтобы не путаться. 
      onOpenCallback: openHandler,
      onCloseCallback: closeHandler,
    });    
    popupInstance.open(); 
  }

  allEqElements.forEach((item) => item.addEventListener('click', openPopupHandler));
}