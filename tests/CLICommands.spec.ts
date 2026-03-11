import { test, expect } from "@playwright/test"

test('CLI practice 1', async ({ page }) => {
    console.log("Start practice test 1")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 1")

});

test('CLI  practice 2 @smoke', async ({ page }) => {
    console.log("Start practice test 2")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 2")
});

test('CLI  practice 3', async ({ page }) => {
    console.log("Start practice test 3")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 3")
});