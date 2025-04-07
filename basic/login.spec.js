import { test, expect } from '@playwright/test';

test('hidden options', async ({ page }) => {
    try {
        await test.step('Navigate to login page', async () => {
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        });

        await test.step('Login with username and password', async () => {
            await page.locator("input[placeholder='Username']").fill('Admin');
            await page.locator("input[placeholder='Password']").fill('admin123');
            await page.locator("button[type='submit']").click();
        });

        await test.step('Navigate to PIM section', async () => {
            await page.locator("//span[normalize-space()='PIM']").click();
            await page.waitForSelector("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]");
            await page.waitForTimeout(3000);
        });

        await test.step('Click on first icon to open options', async () => {
            await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
        });

        await test.step('Select "QA Lead" option from the list', async () => {
            const kings = await page.$$("//div[@role='listbox']//span");

            let selected = false;
            for (const option of kings) {
                const value = await option.innerText();
                console.log(value);
                if (value.includes('QA Lead')) {
                    await option.click();
                    selected = true;
                    break;
                }
            }

            if (!selected) {
                throw new Error('QA Lead option not found.');
            }
        });

        // Optional: Wait for a while to ensure any UI updates
        //await page.waitForTimeout(3000);

        // If all steps pass
        console.log("Test passed successfully");
    } catch (error) {
        console.error("Test failed: " + error.message);
        throw error;  // Rethrow error to mark the test as failed
    }
});
