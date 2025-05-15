import { test, expect } from '@playwright/test';
 
// Global setup for all tests
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
  const gotItButton = page.locator("//button[normalize-space()='Got it!']").click();
  
   
});   

/// HOME PAGE (1)


test.describe('Generate Report ', () => {

  test('validate text in home page #Reports ', async ({ page }) => {
    await page.waitForTimeout(5000);
    const welcomeText = await page.locator("//h1[normalize-space()='Welcome to Alkimi Labs']").textContent();
    expect(welcomeText).toBe('Welcome to Alkimi Labs');

    const belowheading = await page.locator("p[class='lg:text-sm text-gray-40 text-sm md:text-lg max-w-[400px] lg:max-w-[450px] mx-auto transition-transform duration-700 will-change-transform translate-y-0']").textContent();
    expect(belowheading).toBe("Where $ADS holders innovate, earn rewards and shape digital advertising's future.");

    const button = await page.locator("button[type='button']");
    expect(button).toBeVisible();
    const buttontext = await button.textContent();
    expect(buttontext).toBe("Buy $ADS");

    const rewards = await page.locator("a[class='inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-button ring-offset-background focus-visible:outline-none transition-all disabled:pointer-events-none disabled:opacity-20 underline underline-offset-2 text-gray-40 active:text-white hover:text-white lg:text-sm px-[48px] py-[10px] text-sm']").textContent();
    expect(rewards).toBe("stimate Rewards");
  });
});

/// CALLING API (2)

test.describe('Saved Templates ', () => {

  test("matching Api values #Reports ", async ({ page }) => {
    const apiResponse = await page.request.get('https://qa.labs-v2.alkimi.org/staking/get-counts');
    const data = await apiResponse.json();
    console.log(data)

    const dynamic1 = data.totalSupply;
    const uidynamicvalues1 = await page.locator('body > main:nth-child(3) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(4)').textContent();
    const value_withouttext1 = uidynamicvalues1.replace(/[^0-9.]/g, '');
    expect(parseInt(value_withouttext1)).toBe(dynamic1);

    const dynamic2 = data.circulatingSupply;
    const uidynamicvalues2 = await page.locator("body > main:nth-child(3) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(3)").textContent();
    const value_withouttext2 = uidynamicvalues2.replace(/[^0-9.]/g, '');
    expect(parseFloat(value_withouttext2)).toBe(dynamic2);

    const dynamic3 = data.totalValueLocked;
    const dynamicElement3 = await page.locator("body > main:nth-child(3) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(5)");
    const uidynamicvalues3 = await dynamicElement3.textContent();
    const value_withouttext3 = uidynamicvalues3.replace(/[^0-9.]/g, '');
    const Actualvalue = parseFloat(value_withouttext3);
    expect(Actualvalue).toBeCloseTo(dynamic3);

    const dynamic4 = data.$adsPrice;
    const uidynamicvalues4 = await page.locator("body > main:nth-child(3) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2)").textContent();
    const value_withouttext4 = uidynamicvalues4.replace(/[^0-9.]/g, '');
    const Actualvalue2 = parseFloat(value_withouttext4);
    expect(Actualvalue2).toBeCloseTo(dynamic4)
  });
});



/// VALIDATING EXPLORER (3)



test.describe('Scheduled Reports', () => {

  test("validating ADS explorer #Reports ", async ({ page }) => {
    const adsExplore = await page.locator("//p[normalize-space()='Ads Explorer']").textContent();
    expect(adsExplore).toBe("Ads Explorer");

    const explore = await page.locator("//a[@href='/ads-explorer'][normalize-space()='Explore']");
    expect(explore).toBeVisible();
    const exploretext = await explore.textContent();
    expect(exploretext).toBe("Explore");

    const viideo = await page.locator("//body[1]/main[1]/section[2]/div[1]/video[1]");
    expect(viideo).toBeVisible();

    const text = await page.locator('//p[@class="text-lg lg:text-2xl mb-5"]').first().innerText();
    expect(text).toBe("Unlock the Power of Transparency. Whether you’re a media buyer, publisher or a curious user, gain full visibility into ad-spends and their impact. Track metrics, analyse results, and ensure every impression is recorded.");
  });

  test("validating softstaking #Reports ", async ({ page }) => {
    const soft = await page.locator("//p[normalize-space()='Soft Staking']").textContent();
    expect(soft).toBe("Soft Staking");

    const stakeexplore = await page.locator("(//a[@href='/staking'][normalize-space()='Explore'])[1]");
    expect(stakeexplore).toBeVisible();
    const stakeexplorebutton = await stakeexplore.textContent();
    expect(stakeexplorebutton).toBe("Explore")

    const video2 = await page.locator("(//video)[2]");
    expect(video2).toBeVisible()

    const softtext = await page.getByText("Unlock effortless rewards with our Soft Staking Pool—flexible, straightforward, and designed to work for you.").innerText();
    expect(softtext).toBe("Unlock effortless rewards with our Soft Staking Pool—flexible, straightforward, and designed to work for you.");
  });
})


;

   





































//if (await gotItButton.isVisible()) {
    //await gotItButton.click();