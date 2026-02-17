import { test as baseTest } from '@playwright/test';

type MyHookFixtures = {
    loginlogoutfixture: any;
    //workerFixture1: any;
}

export const test = baseTest.extend<MyHookFixtures>({
    loginlogoutfixture: async ({ page }, use) => {
        const loginlogoutfixture = undefined;
        //Login
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('.submit-button').click();
        await use(loginlogoutfixture);
        //Logout
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    }


});

export { expect } from '@playwright/test';
