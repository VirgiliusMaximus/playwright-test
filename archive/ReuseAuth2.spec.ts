import {test, expect} from '@playwright/test';

//test.use({ storageState: {cookies: [], origins: []}});


test.beforeEach("Login", async ({ page }) => {

    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('admin123');
    // await page.locator('button[type="submit"]').click();

});

test('Verify apply leave card navigation dashboard', async ({ page, context }) => {
    await context.clearCookies();
    await expect(page.locator('h6')).toHaveText('Dashboard');
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await page.getByRole('button', { name: 'Apply Leave' }).click();
    await expect(page.getByRole('heading', { name: 'Apply Leave' })).toBeVisible();
});