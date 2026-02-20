import {test} from '@playwright/test';


test("Mouse Hover", async ({ page }) => {

    await page.goto("https://demo.opencart.com/");
    await page.locator("a:has-text('Desktops')").hover();
    await page.locator("a:has-text('Mac (1)')").click();
    await page.waitForURL("https://demo.opencart.com/index.php?route=product/category&path=20_27");



});