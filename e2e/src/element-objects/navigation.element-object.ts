import {Locator} from "@playwright/test";

export class NavigationElementObject {
    get signUpButton() {
        return this.element.locator('xpath=.//*[contains(@class, "ph-project__register")]');
    }

    get signInButton() {
        return this.element.locator('xpath=.//*[contains(@class, "ph-login")]');
    }

    constructor(public readonly element: Locator) {
    }
}