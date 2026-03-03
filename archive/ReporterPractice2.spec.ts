import {expect, test} from "@playwright/test";

test("Reporter Practice 4", async ({page}) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test("Reporter Practice 5", async ({page}) => {
    await page.goto("https://playwright.dev/");
   await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test("Reporter Practice 6", async ({page}) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});