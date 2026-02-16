import {chromium,test,expect} from '@playwright/test';
        
        
test('mynew first test', async ({ page }) => {
    console.log('Hello, Playwright!,this is the first TC');
});


test('mynew second  test', async ({ page }) => {
  await page.goto('https://www.bing.com/?toHttps=1&redig=0BBC72210DED4E9396FEC5C57CFC16F2');
  await page.getByRole('link', { name: 'Reject' }).click();
  await page.getByRole('textbox', { name: 'Enter your search here -' }).click();
  await page.getByRole('textbox', { name: 'Enter your search here -' }).fill('tion');
  await page.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Stiri Timis – tion.ro - Timiș' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'MAI MULTE OPȚIUNI' }).click();
  await page1.getByRole('button', { name: 'RESPINGERE TOTALĂ' }).click();
}); 

test('third first test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Respinge tot' }).click();
  await page.getByRole('button', { name: 'Aplicații Google' }).click();
});

test('othertest', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Respinge tot' }).click();
  await page.getByRole('button', { name: 'Aplicații Google' }).click();
    await browser.close();
});