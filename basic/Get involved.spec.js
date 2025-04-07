import { test, expect } from '@playwright/test';

test('validate Get involved  page', async ({ page }) =>
     {await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
        await page.locator("//button[normalize-space()='Got it!']").click()

const getinvolved = await page.locator("h2[class=' text-[28px] leading-[28px] lg:text-[58px] lg:leading-[58px] uppercase font-unbounded mb-3']").textContent()
    expect(getinvolved).toBe("Get  INVOLVED");
    const getbelow_text = await page.locator("p[class='text-xs lg:text-sm text-gray-40 max-w-xs']").textContent()
    expect(getbelow_text).toBe("With the $ADS ecosystem. Power our Ad Exchange with a few simple steps.");


    const video3 = await page.locator("(//video[contains(@class,'absolute top-0 left-0 w-full h-full object-cover')])[1]")
    expect(video3).toBeVisible()
    const video3text = await page.getByText("$ADS is your gateway into the Alkimi network. You can use these for either running a validator on the network or staking your stADS.").innerText()
    expect(video3text).toBe("$ADS is your gateway into the Alkimi network. You can use these for either running a validator on the network or staking your stADS.")
    const buytext = await page.locator("(//h3[normalize-space()='BUY $ADS'])[1]").textContent()
    expect(buytext).toBe("BUY $ADS");
    const byebutton = await page.locator("//a[normalize-space()='Buy $ADS']")
    expect(byebutton).toBeVisible()
     })
    
///HOME PAGE(1)
test('validate  home page', async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.goto('https://qa-alkimi-labs.vercel.app/?_vercel_share=RPRHjy6nR3K52URLJHrLThX4kYoyv29p');
    await page.locator("//button[normalize-space()='Got it!']").click()
    const welcomeText = await page.locator("//h1[normalize-space()='Welcome to Alkimi Labs']").textContent();
    expect(welcomeText).toBe('Welcome to Alkimi Labs');
    const belowheading = await page.locator("p[class='lg:text-sm text-gray-40 text-sm md:text-lg max-w-[400px] lg:max-w-[450px] mx-auto transition-transform duration-700 will-change-transform translate-y-0']").textContent();
    expect(belowheading).toBe("Where $ADS holders innovate, earn rewards and shape digital advertising's future.");
    const button = await page.locator("button[type='button']")
    expect(button).toBeVisible()
    const buttontext = await button.textContent()
    expect(buttontext).toBe("Buy $ADS")
    const rewards = await page.locator("a[class='inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-button ring-offset-background focus-visible:outline-none transition-all disabled:pointer-events-none disabled:opacity-20 underline underline-offset-2 text-gray-40 active:text-white hover:text-white lg:text-sm px-[48px] py-[10px] text-sm']").textContent()
    expect(rewards).toBe("Estimate Rewards");

})


test('bootstrap ',async({page})=>
{
await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
await page.locator("button[title='HTML, CSS']").click();
   
const collecting=await page.$$("ul>li label input");

for(let collect of collecting)
{
   const  value =await collect.textContent();
   if(value.includes('Angular')||value.includes('Java'))
   {
       await    collect.click();


   }


}



})