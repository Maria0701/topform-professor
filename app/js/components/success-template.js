export const successTemplate = (successMessage) => {
    const isSuccess = successMessage === 'success';
    const successText = isSuccess
        ? `Сообщение отправлено.<br/> Мы свяжемся с вами, чтобы уточнить детали`
        : `<p>Пожалуйста, свяжитесь с ними по телефонам</p>
            <div class="popup__phones">
				<a href="tel:+78122727024" title="позвонить в клинику" class="phone-link">+7 (812) 272-70-24</a>
				<a href="tel:+78122723734" title="позвонить в клинику" class="phone-link">+7 (812) 272-37-34</a>
				<a href="tel:+78122758696" title="позвонить в клинику" class="phone-link">+7 (812) 275-86-96</a>
            </div>
        `;
    const successName = isSuccess
    ? `Спасибо`
    : `ошибка отправки!`;

    const isReviews = window.location.href.includes('reviews');

    const remark = !isReviews && isSuccess 
        ? '<div class="popup__important important-message">ПОСЛЕ ЗАПИСИ ПРОСИМ ПОЛУЧИТЬ ПОДТВЕРЖДЕНИЕ О ПРИЕМЕ ОТ РЕГИСТРАТУРЫ</div>' 
        : '';

    return `
    <div class="popup-overlay opened" data-popup="${successMessage}">
    <section class="popup popup--success opened">
        <div class="popup__wrapper">
            <button class="popup__close js-close">
            <svg width="12" height="12">
                <use xlink:href="/maria/build/img/sprite.svg#cancel"></use>
            </svg>
            </button>
            <div class="popup__head">
                <div class="popup__svg">
                <svg width="140" height="140">
                    <use xlink:href="/maria/build/img/sprite.svg#${successMessage}"></use>
                </svg>
                </div>
                <p class="popup__name">${successName}</p>
                <div class="popup__remark">${successText}</div>
                ${remark}
            </div>           
            <button class="comment-form__btn btn btn--primary js-close">Хорошо</button>
        </div>
    </section>
</div>
    `;
}