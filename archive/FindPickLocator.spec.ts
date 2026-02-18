import {test} from '@playwright/test';

test('Pick locator test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    page.locator('[data-test="username"]').click
    page.locator('[data-test="username"]').fill('standard_user');
  

});


