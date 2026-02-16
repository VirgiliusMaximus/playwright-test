import {chromium,test,expect} from '@playwright/test';


//test.skip(({ browserName }) => browserName === 'chromium', 'Skipping all tests in Chromium browsers.');
test.fail(({ browserName }) => browserName === 'chromium', 'Skipping all tests in Chromium browsers.');
test.describe('Annotation Test Suite', () => {
  //test.skip(({ browserName }) => browserName === 'chromium', 'Skipping all tests in Chromium browsers.');
  test('Annotation test 1', async ({ page }) => {
 
   await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group",{has: page.locator("#user-name")}).click()
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially('standard_user');
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('.inventory_item_name',{hasNotText: /Sauce.*/}).click();

});

test('Annotation test 2', async ({ page }) => {
 
   await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group",{has: page.locator("#user-name")}).click()
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially('standard_user');
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('.inventory_item_name',{hasNotText: /Sauce.*/}).click();

});

});

test('Annotation test 3', async ({ page,browserName }) => {
 //test.skip(browserName === 'chromium', 'Skipping test on Chromium browsers.');
 //test.slow(browserName === 'chromium', 'Slowing down test on Chromium browsers.');
 //test.fail();
 test.fail(browserName === 'chromium', 'Expected failure on Chromium browsers.');
   await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group",{has: page.locator("#user-name")}).click()
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially('standard_user');
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('.inventory_item_name',{hasNotText: /Sauce.*/}).click();

 
});

test('Annotation test 4', async ({ page }) => {
   //test.slow();
   test.setTimeout(600000);
   await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group",{has: page.locator("#user-name")}).click()
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially('standard_user');
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('.inventory_item_name',{hasNotText: /Sauce.*/}).click();

 
});