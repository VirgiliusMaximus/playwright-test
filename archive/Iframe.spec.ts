import {chromium,test,expect, Page} from '@playwright/test';



  test('iFrame test 1', async ({page}) => {
 
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form');

    const w3testframe = page.frame('iframeResult');
    await w3testframe?.locator('#fname').fill('My test name');
  


 

});

  test('iFrame test 2', async ({page}) => {
 
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    const w3schoolsFrame = page.frame({url: "https://www.w3schools.com/html/default.asp"});
    await page.locator('iframe[title="FastCMP"]').first().contentFrame().getByRole('button', { name: 'Accept' }).click();
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('button', { name: 'Button to open search field' }).click();
    //await w3schoolsFrame?.getByLabel('Button to open search field').click();
    await w3schoolsFrame?.getByPlaceholder('Search W3Schools').fill('Playwright');
  

    
 

});

  test('iFrame test 3', async ({page}) => {
 
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    await page.locator('iframe[title="FastCMP"]').first().contentFrame().getByRole('button', { name: 'Accept' }).click();
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
   const fastcmpFrame = page.frameLocator('[title="W3Schools HTML Tutorial"]');
     await fastcmpFrame.getByLabel('Button to open search field').click();
    await fastcmpFrame.getByPlaceholder('Search W3Schools').fill('Playwright');
    
 

});