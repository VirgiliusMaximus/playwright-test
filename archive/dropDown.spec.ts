import { chromium, test, expect, Page } from '@playwright/test';



test('DropDown 2', async ({ page }) => {
  await page.goto('https://artoftesting.com/samplesiteforselenium');
  await page.getByRole('button', { name: 'AGREE' }).click();
  await page.locator('#testingDropdown').selectOption('Manual Testing');
  await page.locator('#testingDropdown').selectOption({ value: 'Performance' });
  await page.locator('#testingDropdown').selectOption({ label: 'Database Testing' });
  await page.locator('#testingDropdown').selectOption({ index: 3 });
 



});

test('DropDown 1', async ({ page }) => {
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label');
  await page.locator('iframe[title="FastCMP"]').contentFrame().getByRole('button', { name: 'Accept' }).click();
  await page.frameLocator('#iframeResult').locator('select').selectOption('Mercedes');
  await page.frameLocator('#iframeResult').locator('select').selectOption({ label: 'Audi' });


});

test('Multi select DropDown 1', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await page.locator('#cars').selectOption('Audi' );
  await page.locator('#cars').selectOption(['Volvo', 'Saab', 'Opel']);
  
});
