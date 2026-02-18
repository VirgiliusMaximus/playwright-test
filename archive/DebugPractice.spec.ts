import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F');
    await expect(page.locator('.page-title')).toHaveText('Welcome, Please Sign In!');
});

test('Login verification', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F');
    const url = page.url();
    await page.locator('#Email').fill('automation123@gmail.com');
    await page.locator('#Password').fill('Parola11');
   // await page.getByRole('button', { name: 'Log in' }).click();
   // await expect(page.locator('.ico-logout')).toBeVisible();
   // await page.locator('.ico-logout').click();
    await expect(page.locator('.page-title')).toHaveText('Welcome, Please Sign In!');
});