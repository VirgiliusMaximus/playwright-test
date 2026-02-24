import {expect, test} from "@playwright/test";


test("VisualTesting Example", async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveScreenshot('login.png');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('.submit-button').click();
    await expect(page).toHaveScreenshot('Landing.png');
    await page.locator("[data-test='shopping-cart-link']").click();

   

});