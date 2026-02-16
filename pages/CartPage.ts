import { Page, Locator, expect } from '@playwright/test';


export class CartPage {

    readonly page: Page;
    readonly cartItemLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItemLink = page.getByRole('link', { name: 'Sauce Labs Backpack' });
    }

}