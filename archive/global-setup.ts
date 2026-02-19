import { chromium, expect} from "@playwright/test";

async function globalSetup() {

   const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
        //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('button[type="submit"]').click();
    //await expect(page.locator('h6')).toHaveText('Dashboard');
    await context.storageState({ path: './playwright/.auth/auth2.json' });

}

export default globalSetup;