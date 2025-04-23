import { test as base, chromium } from '@playwright/test';
import path from 'path';
export const test = base.extend({
  context: async ({}, use) => {
    const pathToExtension = path.join(__dirname, './metamask-chrome-12.13.0'); // Ensure this path is correct
    // Launch Chromium with MetaMask extension
    const context = await chromium.launchPersistentContext('', {
      headless: false, // Extensions need non-headless mode
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
      ]
    });
    const extensionPage = await context.pages()[0];  // Get the first opened extension page

    // Wait for the page to load
    await extensionPage.waitForLoadState('domcontentloaded');

    // Now navigate to the URL you want
    const targetUrl = 'https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p';  // Replace with your target URL
    await extensionPage.goto(targetUrl);

    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {
    let [background] = context.serviceWorkers();
    if (!background)
      background = await context.waitForEvent('serviceworker');
    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});
export const expect = test.expect;