import {chromium,test,expect, Page} from '@playwright/test';



  test('Cart ', async ({context}) => {
 
    const newPage = await context.newPage();
    await newPage.goto('https://testpages.eviltester.com/styled/windows-test.html');
    //await expect(newPage).toHaveTitle('Windows Links | Test Pages');
    const newPageEvent = context.waitForEvent('page');
    await newPage.locator('#gononame').click();
    const newPage2 = await newPageEvent;
    await expect(newPage2).toHaveTitle('Linked Page with No Window Name | Test Pages');
    await newPage2.locator('#main_navbar > ul > li:nth-child(4) > a > span').click();
    await newPage.locator('#main_navbar').getByRole('link', { name: 'Challenges' }).click();
  
    
 

});

  