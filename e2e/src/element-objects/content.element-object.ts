import {Locator} from "@playwright/test";
import {SingleInputFormElementObject} from "./single-input-form.element-object";
import {AskFormElementObject} from "./ask-form.element-object";
import {SearchStatusBlockElementObject} from "./search-status-block.element-object";

export class ContentElementObject {
    get questionForm() {
        return new SingleInputFormElementObject(this.element.locator('xpath=.//form[contains(@class, "nD9xn")]'));
    }

    get askForm() {
        return new AskFormElementObject(this.element.locator('xpath=.//form[contains(@class, "JIshi")]'));
    }

    get searchStatusBlock() {
        return new SearchStatusBlockElementObject(this.element.locator('xpath=.//*[contains(@class, "MiViR")]'))
    }

    constructor(public readonly element: Locator) {
    }
}