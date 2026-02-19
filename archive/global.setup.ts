import { test } from "@playwright/test";

test("global setup", async ({ page }) => {
    // This is a placeholder test to trigger the global setup
    // The actual login and storage of authentication state is handled in the global setup file

    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Save authentication state to a file
    await page.context().storageState({ path: './playwright/.auth/auth3.json' });
});
