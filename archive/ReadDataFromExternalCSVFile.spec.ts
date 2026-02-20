import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync('testdata/testdata.csv'), {
    columns: true,
    skip_empty_lines: true,
    //delimiter: ';',

});

test.beforeEach("Login", async ({ page }) => {

    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.locator('button[type="submit"]').click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});


records.forEach((record : any) => {
    test(`Add candidate for recruitment from CSV ${record.Id}`, async ({ page }) => {
        await page.locator('a').filter({ hasText: 'Recruitment' }).click();
        await page.getByRole('button', { name: 'Add' }).click();
        await page.getByPlaceholder('First Name').fill(record.FirstName);
        await page.getByPlaceholder('Last Name').fill(record.LastName);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
        //await expect(page.locator('#app')).toContainText('John Doe Smith');
    });
});

