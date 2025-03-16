import {Locator} from "@playwright/test";
import {SingleInputFormElementObject} from "./single-input-form.element-object";

export class HeaderElementObject {
    get searchForm() {
        return new SingleInputFormElementObject(this.element.locator('xpath=.//form'))
    }

    constructor(public readonly element: Locator) {
    }
}