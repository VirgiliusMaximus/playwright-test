import { test, expect } from "@playwright/test"

test('CLI practice 4', async ({ page }) => {
    console.log("Start practice test 4")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 4")

});

test('CLI  practice 5', async ({ page }) => {
    console.log("Start practice test 5")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 5")
});

test('CLI  practice 6', async ({ page }) => {
    console.log("Start practice test 6")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 6")
});