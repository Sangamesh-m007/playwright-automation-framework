import { test } from '@playwright/test';

test.describe('Group 1 - Get Involved Page @Regression  ', () => {
  test('Validate page title and cookie button ', async ({ page }) => {
    await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    await page.locator("//button[normalize-space()='Got it!']").click();
  });

  test('Check main heading and subheading @Regression', async ({ page }) => {
    const heading = await page.locator("h2.text-[28px]").textContent();
    console.log('Main heading:', heading);
  });

  test('Check video and description @Smoke ', async ({ page }) => {
    console.log("This test is skipped");
  });
})

test.describe('Group 2 - Home Page ', () => {
  test('Validate home welcome text in Home Page', async ({ page }) => {
    await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    const welcome = await page.locator("//h1[normalize-space()='Welcome to Alkimi Labs']").textContent();
    console.log('Welcome:', welcome);
  });

  test('Check subheading and Buy $ADS button in Home Page @smoke ', async ({ page }) => {
    const btn = await page.locator("button[type='button']");
    console.log('Button text:', await btn.textContent());
  });

  test('Skip reward link test in Home Page @smoke', async ({ page }) => {
    console.log("Skipping reward link check");
  });
});


