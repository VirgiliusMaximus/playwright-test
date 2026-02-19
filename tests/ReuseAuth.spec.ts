import {test, expect} from '@playwright/test';


test.beforeEach("Login", async ({ page }) => {

    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('button[type="submit"]').click();

});

test('Verify timesheet card on Dashboard', async ({ page }) => {
    await expect(page.locator('#app')).toContainText('Time at Work');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('button', { name: 'Timesheets' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');

  
});

test('Add candidate for recruitment', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'Recruitment' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Smith');
    await page.getByPlaceholder('Middle Name').fill('Doe');
    await page.getByPlaceholder('Type here').first().fill('john.smith@example.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
    //await expect(page.locator('#app')).toContainText('John Doe Smith');
});

test('Verify PIM', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'PIM' }).click();
    await expect(page.locator('h6')).toHaveText('PIM');
});