import { test, expect } from '@playwright/test';

test.beforeEach("Login", async ({ page }) => {
    //Login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('.submit-button').click();
});

test.afterEach("Logout", async ({ page }) => {
    //Logout
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});


test("Adding /Removing products from cart", async ({ page }) => {
    //Adding / Removing products from cart
    await page.getByText('Sauce Labs Backpack').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator(".shopping_cart_link")).toHaveText('1');
    await page.locator('[data-test="remove"]').click();
    await expect(page.locator(".shopping_cart_link")).not.toBeVisible

});

test("Empty cart verification", async ({ page }) => {
    //Empty cart verification
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".cart_item")).not.toBeVisible();

});