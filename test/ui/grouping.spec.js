import { test } from '@playwright/test';

test.describe('Group 1 - Get Involved Page', () => {
  test('Validate page title and cookie button', async ({ page }) => {
    await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    await page.locator("//button[normalize-space()='Got it!']").click();
  });

  test('Check main heading and subheading', async ({ page }) => {
    const heading = await page.locator("h2.text-[28px]").textContent();
    console.log('Main heading:', heading);
  });

  test('Check video and description', async ({ page }) => {
    console.log("This test is skipped");
  });
});

test.describe('Group 2 - Home Page', () => {
  test('Validate home welcome text', async ({ page }) => {
    await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    const welcome = await page.locator("//h1[normalize-space()='Welcome to Alkimi Labs']").textContent();
    console.log('Welcome:', welcome);
  });

  test('Check subheading and Buy $ADS button', async ({ page }) => {
    const btn = await page.locator("button[type='button']");
    console.log('Button text:', await btn.textContent());
  });

  test('Skip reward link test', async ({ page }) => {
    console.log("Skipping reward link check");
  });
});

test.describe('Group 3 - Bootstrap Page', () => {
  test('Open dropdown and click button', async ({ page }) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator("button[title='HTML, CSS']").click();
  });

  test('Select Angular checkbox if exists', async ({ page }) => {
    const inputs = await page.$$("ul>li label input");
    for (let input of inputs) {
      const label = await input.evaluate(el => el.parentElement?.innerText || '');
      if (label.includes('Angular')) {
        await input.click();
      }
    }
  });

  test('Skip Java checkbox test', async ({ page }) => {
    console.log("Skipping Java checkbox test");
  });
});
