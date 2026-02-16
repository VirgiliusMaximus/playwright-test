import { chromium, test, expect, Page } from '@playwright/test';
let page: Page;
test.beforeAll("Before all Hook", async ({ browser }) => {
    page = await browser.newPage();
    console.log("This is before all hook");
})

test.afterAll("After all Hook", async ({ browser }) => {
    await browser.close();
    console.log("This is after all hook");
})

test.describe('Hooks Test Suite', () => {
    test.beforeEach("Before Each Hook", async ({ page }) => {
        console.log("This is before each hook");
    })
    test.beforeAll("Before all Describe OnlyHook", async () => {
        console.log("This is before all describe only hook");
    })
    test.afterAll("After all Describe OnlyHook", async () => {
        console.log("This is after all describe only hook");
    })
    test('Hooks test 1', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator(".form_group", { has: page.locator("#user-name") }).click()
        await page.locator(".form_group", { has: page.locator("#user-name") }).pressSequentially('standard_user');
        await page.locator(".form_group", { hasNot: page.locator("#user-name") }).click()
        await page.locator(".form_group", { hasNot: page.locator("#user-name") }).pressSequentially('secret_sauce');
        await page.locator(".submit-button").click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.locator('.inventory_item_name', { hasNotText: /Sauce.*/ }).click();

    });

    test('Hooks test 2', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator(".form_group", { has: page.locator("#user-name") }).click()
        await page.locator(".form_group", { has: page.locator("#user-name") }).pressSequentially('standard_user');
        await page.locator(".form_group", { hasNot: page.locator("#user-name") }).click()
        await page.locator(".form_group", { hasNot: page.locator("#user-name") }).pressSequentially('secret_sauce');
        await page.locator(".submit-button").click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.locator('.inventory_item_name', { hasNotText: /Sauce.*/ }).click();

    });
    test.afterEach("After Each Hook", async ({ page }) => {
        console.log("This is after each hook");
    })
});


test('Hooks test 3', async ({ page, browserName }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group", { has: page.locator("#user-name") }).click()
    await page.locator(".form_group", { has: page.locator("#user-name") }).pressSequentially('standard_user');
    await page.locator(".form_group", { hasNot: page.locator("#user-name") }).click()
    await page.locator(".form_group", { hasNot: page.locator("#user-name") }).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('.inventory_item_name', { hasNotText: /Sauce.*/ }).click();


});

test('Hooks test 4', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group", { has: page.locator("#user-name") }).click()
    await page.locator(".form_group", { has: page.locator("#user-name") }).pressSequentially('standard_user');
    await page.locator(".form_group", { hasNot: page.locator("#user-name") }).click()
    await page.locator(".form_group", { hasNot: page.locator("#user-name") }).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('.inventory_item_name', { hasNotText: /Sauce.*/ }).click();


});