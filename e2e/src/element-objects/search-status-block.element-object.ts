import {Locator} from "@playwright/test";
import {SingleInputFormElementObject} from "./single-input-form.element-object";

export class SearchStatusBlockElementObject {
    get title() {
        return this.element.locator('xpath=.//*[contains(@class, "T5M4C")]');
    }

    constructor(public readonly element: Locator) {
    }
}