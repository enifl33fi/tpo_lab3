import { test, expect } from '@playwright/test';
import {RegistrationPageObject} from "../../src/page-objects/registration.page-object";

test('Страница регистрации', async ({page}) => {
    const registerPage = new RegistrationPageObject(page);

    await test.step('Переходим на сайт', async () => {
        await page.goto('https://account.mail.ru/signup', {waitUntil: 'domcontentloaded'});
        await expect(registerPage.registrationForm.element).toBeVisible();
    });
    await test.step('Форма должна соответсвовать эталонному скриншоту', async () => {
        await expect(registerPage.registrationForm.element).toHaveScreenshot('registration-form.png');
    });
});