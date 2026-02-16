import {chromium,test,expect, Page} from '@playwright/test';



  test('DialogsAlerts test 1', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    


});

  test('DialogsAlerts test 2', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('I am a JS Confirm');
    await dialog.dismiss();
  });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

    


});

  test('DialogsAlerts test 3', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('I am a JS prompt');
    await dialog.accept('Playwright');
    //await dialog.dismiss();


  });
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText('You entered: Playwright');

    


});

