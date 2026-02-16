import {chromium,test,expect} from '@playwright/test';

test('assertion test', async ({ page }) => {
 
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator("//*[@name='user-name']")).toBeEnabled();
    await expect(page.locator("//*[@name='user-name']")).toBeVisible();
    await expect(page.locator("//*[@name='user-name']")).toHaveCount(1);
    await expect.soft(page.locator("//*[@name='user-name']"),"This is a fail test").not.toBeEnabled();
    await expect(page.locator("//*[@name='user-name']")).toBeVisible();
    await expect(page.locator("//*[@name='user-name']")).toHaveAttribute('name','user-name');
    await expect(page.locator("//*[@name='user-name']")).toHaveClass(/input_error.*/);
    await expect(page.locator("//*[@name='user-name']")).toHaveId('user-name');
    await expect(page.locator("//*[@name='user-name']")).toHaveJSProperty('nodeName','INPUT');
    await expect(page.locator("//*[@name='user-name']")).toHaveText('');
    await expect(page.locator("//*[@name='user-name']")).toHaveValue('');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    expect(5).toBeGreaterThan(2);
      await expect(page.locator("//*[@name='user-name']")).not.toBeDisabled();
 
});