import { test, expect } from '@playwright/test';
import dataArray from '../testdata/dataForReadData.json';
import logindata from '../testdata/logindata.json';

test.beforeEach("Login", async ({ page }) => {

    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.username);
    await page.getByPlaceholder('Password').fill(logindata.password);
    await page.locator('button[type="submit"]').click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});

test('Verify timesheet card on Dashboard', async ({ page }) => {
    await expect(page.locator('#app')).toContainText('Time at Work');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('button', { name: 'Timesheets' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');


});
dataArray.forEach((data) => {
    test(`Add candidate for recruitment ${data.FName}`, async ({ page }) => {
        await page.locator('a').filter({ hasText: 'Recruitment' }).click();
        await page.getByRole('button', { name: 'Add' }).click();
        await page.getByPlaceholder('First Name').fill(data.FName);
        await page.getByPlaceholder('Last Name').fill(data.LastName);
        await page.getByPlaceholder('Middle Name').fill(data.MiddleName);
        await page.getByPlaceholder('Type here').first().fill(data.Email);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
        //await expect(page.locator('#app')).toContainText('John Doe Smith');
    });
});

// for(const data of dataArray){
// test(`Add candidate for recruitment ${data.FName}`, async ({ page }) => {
//         await page.locator('a').filter({ hasText: 'Recruitment' }).click();
//         await page.getByRole('button', { name: 'Add' }).click();
//         await page.getByPlaceholder('First Name').fill(data.FName);
//         await page.getByPlaceholder('Last Name').fill(data.LastName);
//         await page.getByPlaceholder('Middle Name').fill(data.MiddleName);
//         await page.getByPlaceholder('Type here').first().fill(data.Email);
//         await page.getByRole('button', { name: 'Save' }).click();
//         await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
//         //await expect(page.locator('#app')).toContainText('John Doe Smith');
//     });
// }


test('Verify PIM', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'PIM' }).click();
    await expect(page.locator('h6')).toHaveText('PIM');
});