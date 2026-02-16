
import { Page, Locator } from '@playwright/test';
 
export class HomePage {

        readonly page: Page;
        readonly homePageTitlu: Locator;
        readonly backpackAddtoCart: Locator;
        readonly backpackRemoveButton: Locator;
        readonly shoppingCartIcon: Locator;


    constructor(page: Page) {
        this.page = page;
        this.backpackAddtoCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.backpackRemoveButton = page.locator('#remove-sauce-labs-backpack');
        this.shoppingCartIcon = page.locator('#shopping_cart_container');
        this.homePageTitlu = page.locator('.title');
    }


    async backpackAddToCart() {
       await this.backpackAddtoCart.click();

    }

    async goToCart() {
        await this.shoppingCartIcon.click();
    }
}