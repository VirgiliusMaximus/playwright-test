import {chromium,test,expect} from '@playwright/test';

test('getbyLabel', async ({ page }) => {
    //const browser = await chromium.launch();
    //const context = await browser.newContext();
    //const page = await context.newPage();
    //await page.goto('https://demo.nopcommerce.com/login');
    //await page.getByLabel("Email").fill('testcodeautomate@gmail.com');
    //await page.getByPlaceholder("Search store").fill('computer');
    //console.log(await page.getByText('New Customer', {exact:true}).textContent());
    //await page.getByAltText('nopCommerce demo store', {exact:true}).click();
   // await page.getByTitle('Show products in category Electronics').first().click();
    //await page.getByRole('button', { name: 'search' }).fill('cevap');
    //await page.getByRole('button', { name: 'search' }).click();
    //await browser.close();
});

test('getbyLocator', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId("username").fill('standard_userertere');
  
});