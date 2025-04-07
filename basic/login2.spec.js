const { test, expect } = require('@playwright/test');
const axios = require('axios');


test('Login functionality - step by step status', async ({ page }) => {
  try {
    
    await test.step('Navigate to login page', async () => {
      try {
        await page.goto('https://qa.alkimi-dsp.com/?_vercel_share=0pupzo9EyM9CIo3nPnGgaDI9fM2fUA6n');
        await reportToTusk('Navigate to login page', 'pass');
      } catch (error) {
        await reportToTusk('Navigate to login page', 'fail');
        throw error;
      }
    });

    await test.step('Enter username', async () => {
      try {
        await page.fill('#username', 'admin@alkimi.org');
        await reportToTusk('Enter username', 'pass');
      } catch (error) {
        await reportToTusk('Enter username', 'fail');
        throw error;
      }
    });

    await test.step('Enter password', async () => {
      try {
        await page.fill('#password', 'AlkimiPassw0rd!');
        await reportToTusk('Enter password', 'pass');
      } catch (error) {
        await reportToTusk('Enter password', 'fail');
        throw error;
      }
    });

    await test.step('Click login', async () => {
      try {
        await page.click("//button[normalize-space()='Log In']");
        await page.waitForNavigation();
        await reportToTusk('Click login', 'pass');
      } catch (error) {
        await reportToTusk('Click login', 'fail');
        throw error;
      }
    });

    await test.step('Verify successful login', async () => {
      try {
        const adv = await page.locator("//h2[normalize-space()='Advertisers']").textContent();
        await expect(adv).toBe('Advertisers');
        await reportToTusk('Verify successful login', 'pass');
      } catch (error) {
        await reportToTusk('Verify successful login', 'fail');
        throw error;
      }
    });
    
  } catch (error) {
    console.error('Test failed at a higher level:', error.message);
    throw error; // Re-throw the error so Playwright marks the test as failed
  }
});
// Function to send status updates to Tusk
async function reportToTusk(stepName, status) {
    try {
      // Replace this with the actual API endpoint for Tusk
      const tuskApiUrl ='https://tuskr.app/api/v1/testresults '
     //   https://tuskr.app/api/v1/testcases
      
      
      // Make sure to pass necessary details like test case ID and step info
      const payload = {
        testCaseId: '1678', // Add the Test Case ID
        stepName: stepName,
        status: status, // "pass" or "fail"
        timestamp: new Date().toISOString(),
      };
  
      // Send status to Tusk
      await axios.post(tuskApiUrl, payload);
    } catch (error) {
      console.error('Failed to report to Tusk:', error.message);
    }}
