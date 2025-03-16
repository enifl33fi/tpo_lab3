import {Locator} from "@playwright/test";

export class SingleInputFormElementObject {
    get input() {
        return this.element.locator('xpath=.//input');
    }

    get button() {
        return this.element.locator('xpath=.//a[@role="link"]');
    }

    constructor(public readonly element: Locator) {
    }
}