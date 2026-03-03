import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("Handle Multiple Environments", async ({ page }) => {
console.log("URL: ", process.env.URL);
console.log("USERNAME: ", process.env.USERNAME1);
console.log("PASSWORD: ", process.env.PASSWORD);
const url = process.env.URL as string;
await page.goto(url);
const username = process.env.USERNAME1;
const password = process.env.PASSWORD;
await page.fill("#user-name", username as string);
await page.fill("#password", password as string);
await page.waitForTimeout(7000);
await page.click("#login-button");
});

