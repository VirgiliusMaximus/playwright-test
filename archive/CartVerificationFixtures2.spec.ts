import {expect} from '@playwright/test';
import { test } from '../fixtures/POMfixtures';



  test('Cart verification', async ({page, loginPage, homePage, cartPage}) => {
    await loginPage.openApplication();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(homePage.homePageTitlu).toHaveText('Products');
    await homePage.backpackAddToCart();
    await expect(homePage.backpackRemoveButton).toBeVisible();
    await expect(homePage.shoppingCartIcon).toHaveText('1');
    await homePage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(cartPage.cartItemLink).toBeVisible();
    await expect(cartPage.cartItemLink).toHaveText('Sauce Labs Backpack');

 

});

  