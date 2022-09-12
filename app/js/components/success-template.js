export const successTemplate = (success) => {
    return `
    <div class="popup-overlay opened" data-popup="${success}">
    <section class="popup popup--success opened">
        <div class="popup__wrapper">
            <button class="popup__close js-close">
            <svg width="12" height="12">
                <use xlink:href="img/sprite.svg#cancel"></use>
            </svg>
            </button>
            <div class="popup__head">
                <div class="popup__svg">
                <svg width="140" height="140">
                    <use xlink:href="img/sprite.svg#${success}"></use>
                </svg>
                </div>
                <p class="popup__name">заявка отправлена!</p>
                <p class="popup__remark">Спасибо за обращение.
                    <br/>Мы свяжемся с вами для подтверждения записи</p>
            </div>           
            <button class="comment-form__btn btn btn--primary js-close">Хорошо</button>
        </div>
    </section>
</div>
    `;
}