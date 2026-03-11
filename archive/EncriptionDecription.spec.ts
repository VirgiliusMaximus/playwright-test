import { chromium, test, expect, Page } from '@playwright/test';
import CryptoJS from "crypto-js"
import { encryptData, decryptData } from '../util/encript-decript';
import dotenv from "dotenv"
import securedata from "../testdata/securedata.json"



test('Encription Decription credentials directly in TC', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const encryptedUser = CryptoJS.AES.encrypt('standard_user', 'cheiamea').toString();
  // console.log("Encripted User :", encryptedUser)
  const encriptedU = "U2FsdGVkX1+vqGvivtcO6J+asxEmGSWStkCIYYrmQu0="
  // const ecryptedPass = CryptoJS.AES.encrypt('secret_sauce', 'cheiamea').toString()
  // console.log("Encripted Pass :", ecryptedPass)
  const encriptedP = "U2FsdGVkX19Qh1T5pRPlPWQcu7GpuBw2N6xw4xIspWE="
  const SecretKey: any = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
  const decryptU = CryptoJS.AES.decrypt(encriptedU, SecretKey).toString(CryptoJS.enc.Utf8);
  const decryptP = CryptoJS.AES.decrypt(encriptedP, SecretKey).toString(CryptoJS.enc.Utf8);

  console.log("DecriptedUsername:", decryptU)
  console.log("DecriptedPassword:", decryptP)

  await page.locator('[data-test="username"]').fill(decryptU);
  await page.locator('[data-test="password"]').fill(decryptP);
  await page.locator(".submit-button").click();

});

test('Encription Decription credentials using util created function', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const encryptedUser = encryptData('standard_user');
  const encryptedPass = encryptData('secret_sauce');
  console.log("EncriptedUsername:", encryptedUser)
  console.log("EncriptedPassword:", encryptedPass)
  await page.locator('[data-test="username"]').fill(encryptedUser);
  await page.locator('[data-test="password"]').fill(encryptedPass);
  await page.locator(".submit-button").click();

});

test('Encription Decription credentials using .env', async ({ page }) => {
 const encUname : any = process.env.encriptedU
 const encPass : any = process.env.encriptedP
  const decryptU = decryptData(securedata.encriptedU)
  const decryptP = decryptData(securedata.encriptedP)
  console.log("DEcriptedUsername:", decryptU)
  console.log("DEcriptedPassword:", decryptP)
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(decryptU);
  await page.locator('[data-test="password"]').fill(decryptP);
  await page.locator(".submit-button").click();

});


test('Encription Decription credentials using json', async ({ page }) => {

  const decryptU = decryptData(securedata.encriptedU)
  const decryptP = decryptData(securedata.encriptedP)
  console.log("DEcriptedUsername:", decryptU)
  console.log("DEcriptedPassword:", decryptP)
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(decryptU);
  await page.locator('[data-test="password"]').fill(decryptP);
  await page.locator(".submit-button").click();

});

