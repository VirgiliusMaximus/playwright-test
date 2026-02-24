import {expect, test} from "@playwright/test";


test("Visual Testing verification", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");
    //await expect(page).toHaveScreenshot();
    //await expect(page).toHaveScreenshot("VisualTesting.png");
    //await expect(page).toHaveScreenshot(["childFolder1/childfolder2", "VisualTesting.png"]);
    //await expect(page).toHaveScreenshot(["childfolder3","abc", "VisualTestingWithChildFolder2.png"]);
    // await expect(page).toHaveScreenshot("FullName.png", {
    //     fullPage: true
    // });
    //await expect(page).toHaveScreenshot("MaxdiffPixell.png",{maxDiffPixels: 5000});
    //await expect(page).toHaveScreenshot("MaxdiffPixellRatio.png", {maxDiffPixelRatio: 0.3});
    //await expect(page).toHaveScreenshot("MaskPageVisualTesting2.png",{mask: [page.locator("//table[@id='table1']")]});
    //await expect(page).toHaveScreenshot("MultiMask.png",{mask: [page.locator("#table1"), page.locator("#table2")]});
    //await expect(page.locator("#table1")).toHaveScreenshot("TableVerification.png");
    await expect(page).toHaveScreenshot("IphoneVisualTesting7.png");



});

test("Visual Testing iframe hiding verif", async ({ page }) => {
    await page.goto("https://demoqa.com/forms");
    await expect(page).toHaveScreenshot("IframeHiding.png", {stylePath: "screenshot.css"});
});

test.only("Visual Testing non image screenshot", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    expect(await page.locator(".hero--primary").textContent()).toMatchSnapshot("NonImageScreenshot.txt");

});