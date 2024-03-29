import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';

export class PopupOpener {
  constructor({
    openElt, // элемент, по которому открываем попап
    overlayClass, // класс оверлея
    popupClass, //класс попапа
    closeBtnClass, // класс кнопки закрытия
    animationOpenClass,
    animationCloseClass,
    onOpenCallback = null,
    onCloseCallback = null,
  }) {
    this.openElt = openElt; // кнопка, по которой открывается попап
    this.overlayElt = document.querySelector(overlayClass); // выбираем элемент оверлея. В этом случае сам попап находится внутри элемента
    this.popupElt = this.overlayElt.querySelector(popupClass); // сам элемент popup. В этом случае можно его считаю от оверлея. Если оверлей отдельно от попапа - этот элемент переписать
    this.closeBtns = this.popupElt.querySelectorAll(closeBtnClass); // находим кнопку закрытия
    this.dateElt = this.popupElt.querySelector('[data-date="date"]');
    this.flatpickr = null;
    this.animationOpenClass = animationOpenClass;
    this.animationCloseClass = animationCloseClass;
    this.onOpenCallback = onOpenCallback;
    this.onCloseCallback = onCloseCallback;
    this.closeHandler = this.closeHandler.bind(this);
    this.closeOverlayHandler = this.closeOverlayHandler.bind(this);
    this.btnEnterCloseHandler = this.keyDownHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  open() {
    if (this.animationOpenClass) {
      this.overlayElt.classList.add(this.animationOpenClass);
      this.popupElt.classList.add(this.animationOpenClass);
      this.overlayElt.addEventListener('animationend', this.animationEndHandler);
      this.popupElt.addEventListener('animationend', this.animationEndHandler);
    }

    this.overlayElt.classList.add('opened');
    this.popupElt.classList.add('opened');
    if (this.onOpenCallback) this.onOpenCallback()
    if (this.dateElt) this.initDate(this.dateElt);
    this.setCloseListeners();
  }

  setCloseListeners() {
    this.overlayElt.addEventListener('click', this.closeOverlayHandler);
    this.closeBtns.forEach(item => item.addEventListener('click', this.closeHandler));
    document.addEventListener('keydown', this.keyDownHandler);
    this.closeBtns.forEach(item => item.addEventListener('keydown', this.btnEnterCloseHandler));
  }

  closeHandler(evt) {
    // evt.stopPropagation();
    this.close();
  }

  close() {
    if (this.animationCloseClass) {
      this.overlayElt.classList.add(this.animationCloseClass);
      this.popupElt.classList.add(this.animationCloseClass);
      this.overlayElt.addEventListener('animationend', this.animationEndHandler);
      this.popupElt.addEventListener('animationend', this.animationEndHandler);
    }
    if (this.flatpickr) this.flatpickr.destroy();
    if (document.querySelector('[data-popup="failure"]')) {
      document.querySelector('[data-popup="failure"]').remove();
      this.popupElt = null;
    }

    if (document.querySelector('[data-popup="success"]')) {
      document.querySelector('[data-popup="success"]').remove();
      this.popupElt = null;
    }
    this.popupElt.classList.remove('opened');
    this.overlayElt.classList.remove('opened');
    this.overlayElt.removeEventListener('click', this.closeOverlayHandler);
    this.closeBtns.forEach(item => item.removeEventListener('click', this.closeHandler));
    document.removeEventListener('keydown', this.keyDownHandler);
    this.closeBtns.forEach(item => item.removeEventListener('keydown', this.btnEnterCloseHandler));
    if (this.onCloseCallback) this.onCloseCallback();
  }

  closeOverlayHandler(evt) {
    if (this.popupElt.contains(evt.target)) return;
    this.closeHandler(evt);
  }

  keyDownHandler(evt) {
    if (evt.key === 'Escape') {
      this.closeHandler(evt);
    }
  }

  btnEnterCloseHandler(evt) {
    if (evt.key === 'Enter') {
      this.closeHandler(evt);
    }
  }

  initDate(elt) {
    if (!this.dateElt) return;
    this.flatpickr = flatpickr(elt, {
      "locale": Russian,
      alowInput: true,
      enableTime: false,
      time24hr: false,
      altFormat: `d.m.Y`,
      dateFormat: `d.m.Y`,
      //mode: `range`,
      minDate: new Date(),
    });  // flatpickr    
  }

  animationEndHandler(evt) {
    const animationName = evt.animationName;
    evt.target.classList.remove(animationName);

    if (evt.target === this.overlayElt) {
      this.overlayElt.removeEventListener('animationend', this.animationEndHandler);
    }

    if (evt.target === this.popupElt) {
      this.popupElt.removeEventListener('animationend', this.animationEndHandler);
    }
  }
}