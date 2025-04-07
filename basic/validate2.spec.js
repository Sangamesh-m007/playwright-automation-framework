const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('validate text in home page', async ({ page }) => {
    let steps = [];

    try {
        await page.waitForTimeout(5000);
        await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
        steps.push({ step: 1, status: 'Passed', comment: 'Navigated to homepage' });

        await page.locator("//button[normalize-space()='Got it!']").click();
        steps.push({ step: 2, status: 'Passed', comment: 'Clicked on Got it! button' });

        const welcomeText = await page.locator("//h1[normalize-space()='Welcome to Alkimi Labs']").textContent();
        expect(welcomeText).toBe('Welcome to Alkimi Labs');
        steps.push({ step: 3, status: 'Passed', comment: 'Verified Welcome Text' });

        const belowheading = await page.locator("p[class='lg:text-sm text-gray-40 text-sm md:text-lg max-w-[400px] lg:max-w-[450px] mx-auto transition-transform duration-700 will-change-transform translate-y-0']").textContent();
        expect(belowheading).toBe("Where $ADS holders innovate, earn rewards and shape digital advertising's future.");
        steps.push({ step: 4, status: 'Passed', comment: 'Verified below heading text' });

        const button = await page.locator("button[type='button']");
        expect(button).toBeVisible();
        steps.push({ step: 5, status: 'Passed', comment: 'Buy $ADS button is visible' });

        const buttontext = await button.textContent();
        expect(buttontext).toBe("Buy $ADS");
        steps.push({ step: 6, status: 'Passed', comment: 'Verified button text' });

    } catch (error) {
        steps.push({ step: steps.length + 1, status: 'Failed', comment: `Error: ${error.message}` });
    }

    // Push Results to Tuskr
    await pushResultsToTuskr('12345', '67890', steps);
});

// Function to send step results to Tuskr API
async function pushResultsToTuskr(testRunId, testCaseId, steps) {
    const testResult = {
        "test_run_id": testRunId,
        "test_case_id": testCaseId,
        "status": steps.some(s => s.status === 'Failed') ? 'Failed' : 'Passed',
        "steps": steps
    };

    try {
        const response = await axios.post('https://your-tuskr-instance/api/test-results', testResult, {
            headers: { 'Authorization': 'w0OQFddMlB3eEgcFK1cAe18WJuyacIQcoML3Oz6T' }
        });
        console.log('Result submitted:', response.data);
    } catch (error) {
        console.error('Error submitting result:', error);
    }
}
