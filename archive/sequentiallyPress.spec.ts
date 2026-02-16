import {chromium,test,expect, Page} from '@playwright/test';



  test('Press test 1', async ({page}) => {
   //await page.goto('https://www.ultimateqa.com/filling-out-forms/');
   // await page.locator("#et_pb_contact_name_0").fill('John Doe');
   // await page.locator("#et_pb_contact_message_0").fill('This is a test message.');
    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'Respinge tot' }).click();
    await page.locator('#APjFqb').pressSequentially('playwright testing', {delay:500});
    await page.locator('#APjFqb').press('ArrowDown+ArrowDown+ArrowDown+Enter');   

});
