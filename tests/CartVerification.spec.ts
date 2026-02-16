import {chromium,test,expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';


  test('Cart verification', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login('standard_user', 'secret_sauce');
    const homePage = new HomePage(page);
    await expect(homePage.homePageTitlu).toHaveText('Products');
    await homePage.backpackAddToCart();
    await expect(homePage.backpackRemoveButton).toBeVisible();
    await expect(homePage.shoppingCartIcon).toHaveText('1');
    await homePage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(1);
 const cartPage = new CartPage(page);
    await expect(cartPage.cartItemLink).toBeVisible();
    await expect(cartPage.cartItemLink).toHaveText('Sauce Labs Backpack');

 
    
 

});

  