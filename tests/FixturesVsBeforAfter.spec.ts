import { test, expect} from '../fixtures/MyHooksFixtures';



test("Adding /Removing products from cart", async ({ page, loginlogoutfixture }) => {
    //Adding / Removing products from cart
    await page.getByText('Sauce Labs Backpack').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator(".shopping_cart_link")).toHaveText('1');
    await page.locator('[data-test="remove"]').click();
    await expect(page.locator(".shopping_cart_link")).not.toBeVisible
});
 
test("Empty cart verification", async ({ page, loginlogoutfixture }) => {
    //Empty cart verification
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".cart_item")).not.toBeVisible();

});

test