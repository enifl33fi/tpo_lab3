import { test, expect } from '@playwright/test';
import {IndexPageObject} from "../../src/page-objects/index.page-object";
import {TestTag} from "../../src/types/test-tag";


let indexPage: IndexPageObject;

test.describe(`Стартовая страница`, {tag: [TestTag.IndexPage, TestTag.AskForm]}, () => {
    test.beforeEach(async ({page}) => {
        indexPage = new IndexPageObject(page);

        await test.step('Переходим на сайт', async () => {
            await page.goto('https://otvet.mail.ru/ask', {waitUntil: 'domcontentloaded'});
            await expect(indexPage.header.element).toBeVisible();
        });
    })

    test('Ошибочный ввод', async () => {
        await test.step('Триггерим валидацию', async () => {
            await expect(indexPage.content.askForm.element).toBeVisible();
            await indexPage.content.askForm.triggerValidation();
        });

        await test.step('Должна отобразиться ошибка', async () => {
            await expect(indexPage.content.askForm.themeInputError).toBeVisible();
            await expect(indexPage.content.askForm.themeInputError)
                .toHaveText('Поле «Тема вопроса» обязательно для заполнения');
            await expect(indexPage.content.askForm.button).toHaveClass(/wW0lr/);
        });
    });

    test('Правильный ввод', async () => {
        await test.step('Заполняем форму', async () => {
            await expect(indexPage.content.askForm.element).toBeVisible();
            await indexPage.content.askForm.fillForm();
        });

        await test.step('Форма должна быть доступна для отправки', async () => {
            await expect(indexPage.content.askForm.themeInputError).toBeHidden();
            await expect(indexPage.content.askForm.button).not.toHaveClass(/wW0lr/);
        });
    });
})
