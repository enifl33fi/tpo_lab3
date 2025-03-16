import {Page} from "@playwright/test";
import {NavigationElementObject} from "../element-objects/navigation.element-object";
import {ContentElementObject} from "../element-objects/content.element-object";
import {HeaderElementObject} from "../element-objects/header.element-object";
import {LoginPopupElementObject} from "../element-objects/login-popup.element-object";

export class IndexPageObject {
    get element() {
        return this.page.locator('xpath=.//body');
    }

    get navigation() {
        return new NavigationElementObject(this.element.locator('xpath=.//*[contains(@class, "ph-whiteline")]'));
    }

    get header() {
        return new HeaderElementObject(this.element.locator('xpath=.//*[contains(@class, "header-menu")]'));
    }

    get content() {
        return new ContentElementObject(this.element.locator('xpath=.//div[contains(@class, "gIgDu")]'));
    }

    get loginPopup() {
        return new LoginPopupElementObject(this.element.frameLocator('xpath=.//iframe[contains(@class, "ag-popup__frame__layout__iframe")]'));
    }

    constructor(private readonly page: Page) {}
}