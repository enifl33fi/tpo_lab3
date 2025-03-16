import {Locator} from "@playwright/test";

export class AskFormElementObject {
    get themeInput() {
        return this.element.locator('xpath=.//textarea[@name="question_text"]');
    }

    get themeInputError() {
        return this.element.locator('xpath=.//*[contains(@class, "QnEUz")]');
    }

    get categoryInput() {
        return this.element.locator('xpath=.//*[contains(@class, "Rk4Ak") and @name="select_parents_categories"]');
    }

    get subCategoryInput() {
        return this.element.locator('xpath=.//*[contains(@class, "Rk4Ak") and @name="select_childs_categories"]');
    }

    get listItems() {
        return this.element.locator('xpath=.//*[contains(@class, "UarGH")]');
    }

    get button() {
        return this.element.locator('xpath=.//a[@role="link" and contains(@class, "q5y_1")]');
    }

    async fillForm() {
        await this.themeInput.fill('Question');
        await this.categoryInput.click();
        await this.listItems.first().click();
        await this.subCategoryInput.click();
        await this.listItems.first().click();
    }

    async triggerValidation() {
        await this.themeInput.fill('Question');
        await this.themeInput.fill('');
        await this.themeInput.blur();
    }

    constructor(public readonly element: Locator) {
    }
}