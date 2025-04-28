import { test, expect } from '../fixtures.js';
import { metamask } from '../Pages/metamask.js';
test.describe("metamask validation",()=>
{


test('Launch MetaMask Extension link', async ({ page, extensionId }) => {
  //await page.goto(`chrome-extension://${aklimiExtensionId}/home.html`);
  //const aklimiLabsPage = page;
  await page.goto(`chrome-extension://${extensionId}/home.html`);

  
  const pages = await page.context().pages();
  
  const previous = pages[pages.length - 2]; 
  await previous.close();
//await this.page.waitForTimeout(5000);
   const Tometamask = new metamask({page, extensionId });
  await Tometamask.click();
  await Tometamask.importing();
  await Tometamask.agree();
  
  await Tometamask.pasteSecretRecoveryPhrase([
    'usual', 'topic', 'wasp', 'pink', 'saddle', 'purchase',
    'domain', 'abuse', 'rifle', 'young', 'use', 'flag'
]);

  
  await Tometamask.conformsecret();
  await Tometamask.new('sangu@143bhuvi');
  await Tometamask.onceagin('sangu@143bhuvi');
  await Tometamask.checkbox2();
  await Tometamask.wallet();
  await Tometamask.mydone();
  await Tometamask.mynext();
  await Tometamask.mydone2();


  //await Tometamask.close();
  console.log("MetaMask setup completed successfully!");
  let alkimiPage;
  for (const p of context.pages()) {
    if (p.url().includes("chrome-extension://") && !p.url().includes(extensionId)) {
      alkimiPage = p;
      break;
    }
  }

  await alkimiPage.bringToFront();
  console.log("Switched back to Alkimi extension!");

  // 🎯 Now perform further actions on Alkimi here
  // Example: await alkimiPage.click('selector-for-button');

  
});
})
