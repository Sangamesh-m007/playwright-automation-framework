import { test,expect } from '@playwright/test';

test.describe('Group 1 - Get Involved Page', () => {
  test('Validate page title and cookie button', async ({ page , browserName }) => {
    if (browserName !== 'chromium')test.skip();
    {await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    await page.locator("//button[normalize-space()='Got it!']").click();
    }
  });

  test('Check main heading and subheading', async ({ page, browserName }) => {
    if(browserName !== 'chromium')test.skip()
    {
    const heading = await page.locator("h2.text-[28px]").textContent();
    console.log('Main heading:', heading);
    }
  });
})

test.describe('Alkimi DSP Validation', () => {

 test('Test 1 - Run only in Chromium', async ({ page, browserName }) => {
    if (browserName !== 'chromium')test.skip()
    {

    await page.goto("https://qa.alkimi-dsp.com/user/login");
    await page.locator("#username").fill("admin@alkimi.org");
    await page.locator("#password").fill("AlkimiPassw0rd!");
    await page.locator("//button[normalize-space()='Log In']").click();
    }
  });

  test('Test 2 - Run only in Chromium', async ({ page, browserName }) => {
    if (browserName !== 'chromium') test.skip();
    
    {

    await page.goto("https://qa.alkimi-dsp.com/user/login");
    await page.locator("#username").fill("admin@alkimi.org");
    await page.locator("#password").fill("AlkPassw0rd!");
    await page.locator("//button[normalize-space()='Log In']").click();
    }
  });

  test('Test 3 - Run only in Firefox', async ({ page, browserName }) => {
    if (browserName !== 'firefox') test.skip();
    {

    await page.goto("https://qa.alkimi-dsp.com/user/login");
    await page.locator("#username").fill("admin@alkimi.org");
    await page.locator("#password").fill("AlkimiPassw0rd!");
    await page.locator("//button[normalize-space()='Log In']").click();
    await page.waitForTimeout(5000);
    await page.locator("//span[.='Creatives']").click();
    await page.locator("//a[.='Creatives']").click();
    await page.locator("//a[.='New Creative']").click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Select advertiser' }).click();
    await page.locator("//span[.='Advertiser-1']").click();
    await page.locator("//span[.='Creative details']").click();
    await page.locator("#Name").fill("Tester123");
    await page.locator("#Date\\ To").fill("2025-05-08");
    await page.locator("#Date\\ From").fill("2025-05-08");
    await page.locator("#Landing\\ URL").fill("https://www.alkimi.org/");
    await page.waitForTimeout(2000);
    await page.locator("input[value='Video']").click();
    await page.locator("//button[text()='Dimensions']").click();
    await page.locator("//span[.='300x250']").click();
    await page.locator("label.primary-button").setInputFiles("Upload/300x250.mp4");
    await page.locator('//button[.="Next Step"]').click();
    await page.waitForTimeout(3000);
    }
  
  });

});
















































































//import { skip } from 'node:test';
