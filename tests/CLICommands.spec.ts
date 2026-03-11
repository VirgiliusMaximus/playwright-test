import { test, expect } from "@playwright/test"

test('CLI practice 1', async ({ page }) => {
    console.log("Start practice test 1")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 1")

});

test('CLI  practice 2', async ({ page }) => {
    console.log("Start practice test 2")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright2/);
    console.log("End practice test 2")
});
test.describe('Describe test 3,4,5', async () => {
    test('CLI  practice 3', async ({ page }) => {
        console.log("Start practice test 3")
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('CLI  practice 4', async ({ page }) => {
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
});

test('CLI  practice 6',{tag:["@ui","@smoke"]},  async ({ page }) => {
    console.log("Start practice test 6")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 6")
});

test('CLI practice 7 @smoke', async ({ page }) => {
    console.log("Start practice test 7")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 7")
});

test("Google test 88 @performance", async ({page}) => {
    console.log("Start practice test 88")
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle("Google");
    console.log("End practice test 88")

});
