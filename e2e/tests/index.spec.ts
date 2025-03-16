import { test, expect } from '@playwright/test';
import {TestTag} from "../src/types/test-tag";
import {IndexPageObject} from "../src/page-objects/index.page-object";

let indexPage: IndexPageObject;

test.describe(`Стартовая страница`, {tag: [TestTag.IndexPage]}, () => {
  test.beforeEach(async ({page}) => {
    indexPage = new IndexPageObject(page);

    await test.step('Переходим на сайт', async () => {
      await page.goto('https://otvet.mail.ru', {waitUntil: 'domcontentloaded'});
      await expect(indexPage.header.element).toBeVisible();
    });
  })

  test('Кнопка регистрации', async ({page}) => {
    await test.step('Нажимаем на кнопку регистрации', async () => {
      await expect(indexPage.navigation.signUpButton).toBeVisible();
      const requestPromise = page.waitForRequest((request) =>
          request.url().includes('account.mail.ru/signup') && request.method() === 'GET'
      );
      await indexPage.navigation.signUpButton.click();

      await requestPromise;
    });
  });

  test('Кнопка авторизации', async () => {
    await test.step('Нажимаем на кнопку авторизации', async () => {
      await expect(indexPage.navigation.signInButton).toBeVisible();
      await indexPage.navigation.signInButton.click();
    });

    await test.step('Должны показать попап логина', async () => {
      await expect(indexPage.loginPopup.element).toBeVisible();
    });
  });

  test('Кнопка задать вопрос', async ({page}) => {
    await test.step('Нажимаем на кнопку задать вопрос', async () => {
      await expect(indexPage.content.questionForm.button).toBeVisible();
      const requestPromise = page.waitForRequest((request) =>
          request.url().includes('otvet.mail.ru/ask') && request.method() === 'GET'
      );
      await indexPage.content.questionForm.button.click();

      await requestPromise;
    });
  });
})
