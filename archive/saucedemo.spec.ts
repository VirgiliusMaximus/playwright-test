import {chromium,test,expect} from '@playwright/test';

//test('saucedemo login test', async ({ page }) => {
 //   const browser = await chromium.launch();
 //   const context = await browser.newContext();
 //   const page = await context.newPage();
 //   await page.goto('https://www.saucedemo.com/');
 //   await page.getByPlaceholder('Username').click();
  //  await page.getByPlaceholder('Username').fill('standard_user');
 //   await page.getByPlaceholder('Password').click();
 //   await page.getByPlaceholder('Password').fill('secret_sauce');
 //   await page.getByRole('button', { name: 'Login' }).click();
  //  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  //  await browser.close();
//});

test('saucedemo xpath test', async ({ page }) => {
    //const browser = await chromium.launch();
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//*[@name='user-name']").click()
    await page.locator("//*[@name='user-name']").fill('standard_user');
    await page.locator("#password").click();
    await page.locator("#password").fill('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator("text='Sauce Labs Backpack'").click();
    await page.locator('//*[@id="add-to-cart"]').click();
    //await browser.close();
});

test('method and option locator test', async ({ page }) => {
    //const browser = await chromium.launch();
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group",{has: page.locator("#user-name")}).click()
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially('standard_user');
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await page.locator("//a",{hasText: "Sauce Labs Backpack"} ).click();
    await page.locator('.inventory_item_name',{hasNotText: /Sauce.*/}).click();
    //await browser.close();
});

test('wrong pass', async ({ page }) => {
    //const browser = await chromium.launch();
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator(".form_group",{has: page.locator("#user-name")}).click()
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially('standard_user');
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially('secret_sauce');
    await page.locator(".submit-button").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await page.locator("//a",{hasText: "Sauce Labs Backpack"} ).click();
    await page.locator('.inventory_item_name',{hasNotText: /Sauce.*/}).click();
    //await browser.close();
});