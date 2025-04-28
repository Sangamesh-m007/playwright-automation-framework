import { test, expect } from '@playwright/test';

test('validate softstaking page', async ({ page }) =>
     {
        await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    await page.locator("//button[normalize-space()='Got it!']").click()

const soft = await page.locator("//p[normalize-space()='Soft Staking']").textContent()
    expect(soft).toBe("Soft Staking");
    const stakeexplore = await page.locator("(//a[@href='/staking'][normalize-space()='Explore'])[1]")
    expect(stakeexplore).toBeVisible()
    const stakeexplorebutton = await stakeexplore.textContent()
    expect(stakeexplorebutton).toBe("Explore")
    const video2 = await page.locator("(//video)[2]")
    expect(video2).toBeVisible();
    const softtext = await page.getByText("Unlock effortless rewards with our Soft Staking Pool—flexible, straightforward, and designed to work for you.").innerText()
    console.log(softtext);
    expect(softtext).toBe("unlock effortless rewards with our Soft Staking Pool—flexible, straightforward, and designed to work for you.");
    
     })
     test('validate  home222 page', async ({ page }) => {
        await page.waitForTimeout(5000)
        await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
        await page.locator("//button[normalize-space()='Got it!']").click()
        const welcomeText = await page.locator("//h1[normalize-space()='Welcome to Alkimi Labs']").textContent();
        expect(welcomeText).toBe('Welcome to Alkimi Labs');
        const belowheading = await page.locator("p[class='lg:text-sm text-gray-40 text-sm md:text-lg max-w-[400px] lg:max-w-[450px] mx-auto transition-transform duration-700 will-change-transform translate-y-0']").textContent();
        expect(belowheading).toBe("Where $ADS holders innovate, earn rewards and shape digital advertising's future.");
        const button = await page.locator("button[type='button']")
        expect(button).toBeVisible();
        const buttontext = await button.textContent();
        expect(buttontext).toBe("Buy $ADS")
        const rewards = await page.locator("a[class='inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-button ring-offset-background focus-visible:outline-none transition-all disabled:pointer-events-none disabled:opacity-20 underline underline-offset-2 text-gray-40 active:text-white hover:text-white lg:text-sm px-[48px] py-[10px] text-sm']").textContent()
        expect(rewards).toBe("Estimate Rewards");
    
    })