import { expect, test } from "@playwright/test";

test("Drag and Drop", async ({ page }) => {

    await page.goto("https://demoqa.com/droppable");
    const source = page.getByLabel('Simple').getByText('Drag Me');
    const target = page.getByLabel("Simple").locator("#droppable");
    await source.dragTo(target);
    await page.waitForTimeout(2000);
    await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText("Dropped!");

});

test("Drag and Drop with mouse actions manually", async ({ page }) => {

    await page.goto("https://demoqa.com/droppable");
    await page.getByLabel('Simple').getByText('Drag Me').hover();
    await page.mouse.down();
    await page.getByLabel("Simple").locator("#droppable").hover();
    await page.mouse.up();
    await page.waitForTimeout(2000);
    await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText("Dropped!");



});

test("Drag and Drop with coordinates", async ({ page }) => {

    await page.goto("https://demoqa.com/droppable");
    await page.getByLabel('Simple').getByText('Drag Me').dragTo(page.getByLabel("Simple").locator("#droppable"), { 
        sourcePosition: { x: 0, y: 0 },
        targetPosition: { x: 10, y: 10 }
    });
    
    await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText("Dropped!");
    });

    