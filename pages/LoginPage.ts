import { Page, Locator } from "@playwright/test";

export class LoginPage {


    readonly page: Page;
    readonly usernameInputText: Locator;
    readonly passwordInputText: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInputText = page.locator('#user-name');
        this.passwordInputText = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async openApplication() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username: string, password: string) {
        await this.usernameInputText.fill(username);
        await this.passwordInputText.fill(password);
        await this.loginButton.click();
    }
}
