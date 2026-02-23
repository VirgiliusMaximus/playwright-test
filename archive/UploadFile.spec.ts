import {expect, test} from "@playwright/test";

test("Upload single/multiple File", async ({page}) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
   // await page.locator("#filesToUpload").setInputFiles("to_upload/file1.txt"); // To upload single file
   // expect(await page.locator("#fileList").textContent()).toContain("file1.txt");
    await page.locator("#filesToUpload").setInputFiles(["to_upload/file1.txt", "to_upload/file2.xlsx", "to_upload/file3.docx"]); // To upload multiple files
    expect(await page.locator("#fileList").textContent()).toContain("file1.txt");
    expect(await page.locator("#fileList").textContent()).toContain("file2.xlsx");
    expect(await page.locator("#fileList").textContent()).toContain("file3.docx");
    await page.locator("#filesToUpload").setInputFiles([]); //Remove uploaded files
 

});

test("Upload File", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    const filechoser = page.waitForEvent("filechooser");
    await page.locator("#file-upload").click();
    const filechooser1 = await filechoser;
    await filechooser1.setFiles("to_upload/file2.xlsx");
    await page.locator("#file-submit").click();
    expect(await page.locator("h3").textContent()).toBe("File Uploaded!");
    
});