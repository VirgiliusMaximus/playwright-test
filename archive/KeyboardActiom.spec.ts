import { test } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");
    const commentsField = page.getByText('Comments...');
    await commentsField.press("Control+a");
    await commentsField.press("Backspace");
    await commentsField.press("v+g+l");
    await commentsField.press("Control+a+x");
    const usernameInput = page.locator('input[name="username"]');
    await usernameInput.press("Control+v");
    await usernameInput.press("Control+a+c");
    await page.keyboard.press("PageDown");
    await page.keyboard.press("PageUp");


});    