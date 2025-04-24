import { test, expect } from '@playwright/test';
import mysql from 'mysql2/promise';

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://qa.alkimi-dsp.com/?_vercel_share=0pupzo9EyM9CIo3nPnGgaDI9fM2fUA6n");
  await page.locator("#username").fill("admin@alkimi.org");
  await page.locator("#password").fill("AlkimiPassw0rd!");
  await page.locator("//button[normalize-space()='Log In']").click();
});

test.afterAll(async () => {
  const connection = await mysql.createConnection({
    host:'128.199.31.76',
    user:'dev_user',
    password:'oH-eushie7',
    database:'alkimi_dsp'
  });

  const deleteQuery = 'DELETE FROM alkimi_dsp.creative WHERE id = 7046 AND advertiser_id =402';
  //const result= await connection.execute(deleteQuery);
  //console.log("deleted successfully");
  const [result] = await connection.execute(deleteQuery);
  console.log("Rows affected:", result.affectedRows);
  await connection.end();
});

test('home page validation', async () => {
  const button = await page.locator(".primary-button");
  await expect(button).toBeVisible();
});
