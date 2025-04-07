const { test, expect } = require('@playwright/test');

test('Login functionality - step by step status', async ({ page }) => {
  try {
    
    await test.step('Navigate to login page', async () => {
      await page.goto('https://qa.alkimi-dsp.com/?_vercel_share=0pupzo9EyM9CIo3nPnGgaDI9fM2fUA6n');
    });

    
    await test.step('Enter username', async () => {
      await page.fill('#username', 'admin@alkimi.org');
    });

    
    await test.step('Enter password', async () => {
      await page.fill('#password', 'AlkimiPassw0rd!');
    });


    await test.step('Click login', async () => {
      await page.click("//button[normalize-space()='Log In']");
    });

    
    await test.step('Verify successful login', async () => {
      const adv = await page.locator("//h2[normalize-space()='Advertisers']").textContent();
      await expect(adv).toBe('Advertisers');
    });
  } catch (error) {
    console.error('Test failed at step:', error.message);
    throw error; 
  }
});
