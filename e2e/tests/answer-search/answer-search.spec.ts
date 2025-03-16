import { test, expect } from '@playwright/test';
import {IndexPageObject} from "../../src/page-objects/index.page-object";
import {TestTag} from "../../src/types/test-tag";

let indexPage: IndexPageObject;

test.describe(`Стартовая страница`, {tag: [TestTag.IndexPage, TestTag.Search]}, () => {
    test.beforeEach(async ({page}) => {
        indexPage = new IndexPageObject(page);

        await test.step('Переходим на сайт', async () => {
            await page.goto('https://otvet.mail.ru', {waitUntil: 'domcontentloaded'});
            await expect(indexPage.header.element).toBeVisible();
        });
    })

    test('Пустой запрос', async () => {
        await test.step('Нажимаем на кнопку поиска', async () => {
            await expect(indexPage.header.searchForm.button).toBeVisible();
            await indexPage.header.searchForm.button.click();
        });

        await test.step('Должны увидеть статусный блок', async () => {
            await expect(indexPage.content.searchStatusBlock.element).toBeVisible();
            await expect(indexPage.content.searchStatusBlock.title).toBeVisible();

            await expect(indexPage.content.searchStatusBlock.title).toHaveText(/Задан пустой/);
        });
    });

    test('Не найдено', async () => {
        await test.step('Заполняем форму', async () => {
            await expect(indexPage.header.searchForm.input).toBeVisible();
            await indexPage.header.searchForm.input.fill('zse5yrdytyuigjghgyiuoyjguyiut');
        });

        await test.step('Нажимаем на кнопку поиска', async () => {
            await expect(indexPage.header.searchForm.button).toBeVisible();
            await indexPage.header.searchForm.button.click();
        });

        await test.step('Должны увидеть статусный блок', async () => {
            await expect(indexPage.content.searchStatusBlock.element).toBeVisible();
            await expect(indexPage.content.searchStatusBlock.title).toBeVisible();

            await expect(indexPage.content.searchStatusBlock.title).toHaveText(/ничего не найдено/);
        });
    });
})
