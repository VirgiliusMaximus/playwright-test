import { test, expect } from '@playwright/test';

test("Annotate test 1",
    {
        annotation: {
            type: "test",
            description: "This is the first annotated test"
        },
        tag: ["@google", "@smoke"]

    }, async ({ page }) => {

        await page.goto("https://www.google.com");
        console.log("Annotate test 1 executed");
        await expect(page).toHaveTitle(/Google/);
    });

test("Annotate test 2",{
        annotation: [{
            type: "Facebook title verification",
            description: "Verify Facebook title"
        },
        {
            type: "test description matrix",
            description: "This is the second annotated testMatrix"
        }],
        tag: ["@facebook", "@regression"]
    }, async ({ page }) => {
    await page.goto("https://www.facebook.com");
    console.log("Annotate test 2 executed");
});

test.skip("Annotate test 3",{
        annotation: {
            type: "test skipped",
            description: "This test is skipped"
        },
        tag: ["@amazon", "@skipped"]
    }   , async ({ page }) => {
    await page.goto("https://www.amazon.com");
    console.log("Annotate test 3 executed");
});

test("Annotate test 4", async ({ page }) => {
    await page.goto("https://www.linkedin.com");
    console.log("Annotate test 4 executed");
});