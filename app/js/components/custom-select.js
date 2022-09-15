import { CreateNewElement } from "./utils";

export class CustomSelect {
    constructor(container, customClass) {
        this.container = container;
        this.customClass = customClass;
        this.selectBlock = this.container.querySelector('select');
        this.options = null;
        this.selectBlock = null;
        this.optionsBlock = null; 
        this.init();
    }

    init() {
        if (!this.selectBlock) return;
        this.container.classList.add(this.customClass);
        this.options = this.selectBlock.querySelectorAll('option');
        this.selectBlock = new CreateNewElement(this.container, 'div', `${this.customClass}--select`);
        this.optionsBlock = new CreateNewElement(this.container, 'div', `${this.customClass}--options`);
    }


}