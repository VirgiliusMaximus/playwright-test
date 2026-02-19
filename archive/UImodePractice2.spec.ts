import { test, expect } from '@playwright/test';

test.describe("Descrie mode for UI practice", async () => {
    test("Test1 describe block1", async ({ page }) => {
        console.log("Test1 describe block1");
    });
    test("Test1 describe block2", async ({ page }) => {
        console.log("Test2 describe block2");
    });


    test("Test1 describe block3", async ({ page }) => {
        console.log("Test3 describe block3");
    });

    test("Test1 describe block4", async ({ page }) => {
        console.log("Test4 describe block4");
    });

});