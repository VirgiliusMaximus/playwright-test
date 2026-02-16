import {chromium,test,expect, Page} from '@playwright/test';



  test('Check-Select buttons 1', async ({page}) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    const maleRadio = page.locator('#male');
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();

  

});

  test('Check-Select buttons 2', async ({page}) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator('.Automation').check();
      await expect(page.locator('.Automation')).toBeChecked();
      await page.locator('.Performance').check();
      await expect(page.locator('.Performance')).toBeChecked();
      //await page.locator('.Automation').uncheck();
      //await expect(page.locator('.Automation')).not.toBeChecked();
   if(await page.locator('.Automation').isChecked()){
    console.log("Automation is checked");
   } else{
    console.log("Automation is not checked");
   }
   

  

});
