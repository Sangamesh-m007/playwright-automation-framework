import{test,expect} from '@playwright/test'

test('bootstrap multi',async({page})=>
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