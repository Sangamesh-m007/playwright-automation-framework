// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('Login functionality - step by step status', async ({ page }) => {
  try {
    
    await page.goto('https://qa.alkimi-dsp.com/?_vercel_share=0pupzo9EyM9CIo3nPnGgaDI9fM2fUA6n');
    console.log(' Navigate to login page - Passed');

    await page.fill('#username', 'admin@alkimi.org');
    console.log('Enter username - Passed');

    await page.fill('#password', 'AlkimiPassw0rd!');
    console.log(' Enter password - Passed');

    await page.click("//button[normalize-space()='Log In']");
    console.log(' Click login - Passed');

    // Step 5: Verify successful login
    const adv=await page.locator("//h2[normalize-space()='Advertisers']").textContent()
    await expect(adv).toBe('Advertisers');
    console.log('Verify successful login - Passed');
  } catch (error) {
    console.log('Test failed at step: ', error);
    throw error;
  }
});
