import {FrameLocator, Locator} from "@playwright/test";

export class LoginPopupElementObject {
    get element() {
        return this.frameElement.locator('xpath=.//*[contains(@class, "loginAppPopup")]');
    }
    constructor(public readonly frameElement: FrameLocator) {
    }
}