import {test} from "@playwright/test";

test.describe("Tags",{tag:["@ui","@smoke"]}, () => {
    test("Tag 1 @ui", async ({page}) => {
        await page.goto("https://www.google.com");
        console.log("Tag 1 executed");
    });
    test("Tag 2 @smoke", async ({page}) => {
        await page.goto("https://www.facebook.com");
        console.log("Tag 2 executed");
    }
    );
    test("Tag 3 @regression", async ({page}) => {
        await page.goto("https://www.amazon.com");
        console.log("Tag 3 executed");
    }
    );  
});

test("Tags 4",{tag:"@integration"}, async ({page}) => {
    await page.goto("https://www.linkedin.com");
    console.log("Tag 4 executed");
});
 test("Tags 5",{tag:"@ui"}, async ({page}) => {
    await page.goto("https://www.twitter.com");
    console.log("Tag 5 executed");
});

test("Tags 6",{tag:["@ui","@smoke"]}, async ({page}) => {
    await page.goto("https://www.instagram.com");
    console.log("Tag 6 executed");
});
