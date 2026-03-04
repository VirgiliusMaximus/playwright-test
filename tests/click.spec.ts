import {chromium,test,expect, Page} from '@playwright/test';



  test('Press test 1', async ({page}) => {
    await page.goto('https://www.virtualstagingai.app/');
    await page.getByTestId('navbar-login-button').click();
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    //await page.locator('button:has-text("Add Element")').dblclick()
    //await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    //await page.locator('.context-menu-one').click({button:'right'});



    
      
   
});
