import {expect, test} from "@playwright/test";

test("Allure Reporter Practice 1", async ({page}) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test("Allure Reporter Practice 2", async ({page}) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test("Allure Reporter Practice 3", async ({page}) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});