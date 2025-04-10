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
    expect(video2).toBeVisible()
    const softtext = await page.getByText("Unlock effortless rewards with our Soft Staking Pool—flexible, straightforward, and designed to work for you.").innerText()
    console.log(softtext);
    expect(softtext).toBe("nlock effortless rewards with our Soft Staking Pool—flexible, straightforward, and designed to work for you.");
     })