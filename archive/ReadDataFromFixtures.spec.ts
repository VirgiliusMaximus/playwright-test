import { expect } from '@playwright/test';
import { test } from "../fixtures/TestDataFixture";


test.beforeEach("Login", async ({ page, logindata }) => {

    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.username);
    await page.getByPlaceholder('Password').fill(logindata.password);
    await page.locator('button[type="submit"]').click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});





test("Add candidate for recruitment with", async ({ page, testdata }) => {
    await page.locator('a').filter({ hasText: 'Recruitment' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('First Name').fill(testdata.FName);
    await page.getByPlaceholder('Last Name').fill(testdata.LName);
    await page.getByPlaceholder('Middle Name').fill(testdata.MName);
    await page.getByPlaceholder('Type here').first().fill(testdata.Email);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();



});


