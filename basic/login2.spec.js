const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('Login functionality - step by step status', async ({ page }) => {
  try {
    await test.step('open the browser and enter the url', async () => {
      try {
        await page.goto('https://qa.alkimi-dsp.com/?_vercel_share=0pupzo9EyM9CIo3nPnGgaDI9fM2fUA6n');
        await reportToTuskr('open the browser and enter the url', 'pass');
      } catch (error) {
        await reportToTuskr('open the browser and enter the url', 'fail');
        throw error;
      }
    });

    await test.step('Enter valid  email in email text field', async () => {
      try {
        await page.fill('#username', 'admin@alkimi.org');
        await reportToTuskr('Enter valid  email in email text field', 'pass');
      } catch (error) {
        await reportToTuskr('Enter valid  email in email text field', 'fail');
        throw error;
      }
    });

    await test.step('Enter valid password in password text field ', async () => {
      try {
        await page.fill('#password', 'AlkimiPassw0rd!');
        await reportToTuskr('Enter valid password in password text field', 'pass');
      } catch (error) {
        await reportToTuskr('Enter valid password in password text field', 'fail');
        throw error;
      }
    });

    await test.step('Click on login button', async () => {
      try {
        await page.click("//button[normalize-space()='Log In']");
        await page.waitForNavigation();
        await reportToTuskr('Click on login button', 'pass');
      } catch (error) {
        await reportToTuskr('Click on login button', 'fail');
        throw error;
      }
    });

   /* await test.step('Verify successful login', async () => {
      try {
        const adv = await page.locator("//h2[normalize-space()='Advertisers']").textContent();
        await expect(adv).toBe('Advertisers');
        await reportToTuskr('Verify successful login', 'pass');
      } catch (error) {
        await reportToTuskr('Verify successful login', 'fail');
        throw error;
      }
    });*/

  } catch (error) {
    console.error('Test failed at a higher level:', error.message);
    throw error; // Let Playwright know test failed
  }
});


