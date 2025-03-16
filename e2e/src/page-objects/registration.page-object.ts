import {Page} from "@playwright/test";
import {RegistrationFormElementObject} from "../element-objects/registration-form.element-object";

export class RegistrationPageObject {
    get element() {
        return this.page.locator('xpath=.//body');
    }

    get registrationForm() {
        return new RegistrationFormElementObject(this.element.locator('xpath=.//*[contains(@class, "panel-0-2-39")]'));
    }

    constructor(private readonly page: Page) {}
}