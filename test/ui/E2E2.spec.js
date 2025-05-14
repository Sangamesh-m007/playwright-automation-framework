import { test, expect } from '@playwright/test';
 
// Global setup for all tests
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
  const gotItButton = page.locator("//button[normalize-space()='Got it!']").click();
  
   
});   

/// HOME PAGE (1)

test.describe('ADS Validation', () => {

  test('validate text in home page @Regression', async ({ page }) => {
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


test.describe('Frequency capping', () => {

  test("matching Api values @Regression", async ({ page }) => {
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


test.describe('Alkimi Labs validation', () => {

  test("validating ADS explorer @Regression", async ({ page }) => {
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

  test("validating softstaking @Regression", async ({ page }) => {
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

/// GET INVOLVED SECTION (4)
test.describe(' Group 4-validating get involved alkimi', () => {
  test("check Get involved @Regression", async ({ page }) => {
    const getinvolved = await page.locator("h2[class=' text-[28px] leading-[28px] lg:text-[58px] lg:leading-[58px] uppercase font-unbounded mb-3']").textContent();
    expect(getinvolved.replace(/\s+/g, ' ').trim()).toBe("Get INVOLVED");

    const getbelow_text = await page.locator("p[class='text-xs lg:text-sm text-gray-40 max-w-xs']").textContent();
    expect(getbelow_text).toBe("With the $ADS ecosystem. Power our Ad Exchange with a few simple steps.");

    const video3 = await page.locator("(//video[contains(@class,'absolute top-0 left-0 w-full h-full object-cover')])[1]");
    expect(video3).toBeVisible();

    const video3text = await page.getByText("$ADS is your gateway into the Alkimi network. You can use these for either running a validator on the network or staking your stADS.").innerText();
    expect(video3text).toBe("$ADS is your gateway into the Alkimi network. You can use these for either running a validator on the network or staking your stADS.");

    const buytext = await page.locator("(//h3[normalize-space()='BUY $ADS'])[1]").textContent();
    expect(buytext).toBe("BUY $ADS");

    const byebutton = await page.locator("//a[normalize-space()='Buy $ADS']");
    expect(byebutton).toBeVisible();

    const video4 = await page.locator("(//video[contains(@class,'absolute top-0 left-0 w-full h-full object-cover')])[2]");
    expect(video4).toBeVisible();

    const estimateHeading = await page.locator("(//h3[normalize-space()='Estimate Rewards'])[1]").textContent();
    expect(estimateHeading).toBe("Estimate Rewards");

    const video4text = await page.getByText("Calculate what you could earn getting involved in the $ADS ecosystem.").innerText();
    expect(video4text).toBe("Calculate what you could earn getting involved in the $ADS ecosystem.");

    const video5 = await page.locator("(//video[@class='absolute top-0 left-0 w-full h-full object-cover '])[3]");
    expect(video5).toBeVisible();

    const validateHeading = await page.locator("//h3[normalize-space()='Validate']").textContent();
    expect(validateHeading).toBe("Validate")

    const video5text = await page.getByText("Sign up to become a validator and earn rewards. Note: Minimum 50K $ADS required.").innerText();
    expect(video5text).toBe("Sign up to become a validator and earn rewards. Note: Minimum 50K $ADS required.");

    const becomebutton = await page.locator("//a[normalize-space()='Become A Validator']");
    expect(becomebutton).toBeVisible();

    const softstakingheading = await page.locator("//h3[normalize-space()='Soft Staking Programme']");
    expect(softstakingheading).toBeVisible();

    const softstakingprogram = await page.getByText("Got some stADS from providing liquidity on our pool on balancer? Soft-stake them to earn rewards.").innerText();
    expect(softstakingprogram).toBe("Got some stADS from providing liquidity on our pool on balancer? Soft-stake them to earn rewards.");

    const video6button = await page.locator("//a[normalize-space()='Join the Pool']");
    expect(video6button).toBeVisible();
  });

  test("validating become validator @Regression", async ({ page }) => {
    const becomeValidatorHeading = await page.locator("//p[normalize-space()='Become a Validator']").textContent();
    expect(becomeValidatorHeading).toBe("Become a Validator");

    const becomevalidatortext = await page.getByText("A validator ensures integrity and transparency in our decentralised AD Exchange by verifying transactions and validating new blocks. This promotes trust and efficiency in the Alkimi network.").innerText();
    expect(becomevalidatortext).toBe("A validator ensures integrity and transparency in our decentralised AD Exchange by verifying transactions and validating new blocks. This promotes trust and efficiency in the Alkimi network.");

    const sign = await page.locator("//a[normalize-space()='Sign Up']");
    expect(sign).toBeVisible();

    const joincommunity = await page.locator("//h2[normalize-space()='Join our Community on Discord']").textContent();
    expect(joincommunity).toBe("Join our Community on Discord");

    const joincommunitytext = await page.getByText("Don’t miss out! Discord is where the action happens.").innerText();
    expect(joincommunitytext).toBe("Don’t miss out! Discord is where the action happens.");

    const joinnow = await page.locator("//a[normalize-space()='Join Now']");
    expect(joinnow).toBeVisible();
    
  })
});





































//if (await gotItButton.isVisible()) {
    //await gotItButton.click();