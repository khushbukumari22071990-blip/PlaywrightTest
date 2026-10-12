const {test, expect} =require('@playwright/test');
const { constants } = require('buffer');
const { sign } = require('crypto');
const { promises } = require('dns');
// test('First test',function(){

// });

// test('first playwrite tests',async ({page})=>{
//     // const context=browser.newContext();
//     // const page=await context.newPage;   
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     await page.locator("#username").fill("rahulshetty");
//     await page.locator("#password").fill("learning");
//     await page.locator("#signInBtn").click();
//     console.log(await page.locator("[style*='block']").textContent());
//     await expect(page.locator("[style*='block']")).toContainText("Incorrect");

// });
// test.only('first playwrite test',async ({page})=>{
    
//     // await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     await page.goto("https://google.com");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google");
// });
// test('first playwrite tests',async ({page})=>{
//     const username=page.locator("#username");
//     const password=page.locator("#password");
//     const  signin=page.locator("#signInBtn");
//     const error= page.locator("[style*='block']");
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     await username.fill("rahulshettyacademy");
//     await password.fill("Learning@830$3mK2");
//     await signin.click();
//     const items= page.locator(".card-body a");
//     console.log(await items.first().textContent());
//     const itemtext=await items.allTextContents();
//     console.log(itemtext);

//     // console.log(await error.textContent());
//     // await expect(error).toContainText("Incorrect");


// });

// test('test for assignment', async ({page})=>{
// //     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
// //    await page.locator(".login-wrapper-footer-text").click();
// //    await page.locator("#firstName").fill("khushbu");
// //    await page.locator("#lastName").fill("kumari");
// //    await page.locator("#userEmail").fill("singh.khushi397@gmail.com");
// //    await page.locator("#userMobile").fill("8860519778");
// //     await page.locator("[formcontrolname='occupation']").selectOption('Doctor');
// //     await page.locator("#userPassword").fill("khushbu@123");
// //    await page.locator("#confirmPassword").fill("khushbu@123");
// //     await page.locator("[type='checkbox']").check();
// //      await page.locator("#login").click();
// //      await page.screenshot();
// // //   await page.reload();
// //  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
// //   await page.screenshot();

// //     await page.locator("#userEmail").fill("anshika@gmail.com");
// //     await page.locator("#userPassword").fill("Iamking@000");
// //     await page.locator("#login").click();
// //     await page.screenshot();
// //     // await page.waitForLoadState('networkidle');
// //     await page.locator(".card-body b").first().waitFor();
// //    const s1= await page.locator(".card-body b").allTextContents();
// //     console.log(s1);

// // example 4
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

//     const userName = page.locator("#username");
//     const signIn = page.locator("#signInBtn");
//     const dropdown = page.locator("select.form-control");
//     await dropdown.selectOption("consult");
//     await page.locator(".radiotextsty").last().check();
//      await page.locator("#okayBtn").click();
//      console.log(await page.locator(".radiotextsty").last().isChecked());
// expect(await page.locator(".radiotextsty").last()).toBeChecked();
// await page.locator("#terms").check();
// expect(await page.locator("#terms")).toBeChecked();
// await page.locator("#terms").uncheck();
// expect(await page.locator("#terms").isChecked()).toBeFalsy();
// await expect(page.locator(".blinkingText").last).toHaveAttribute("class",'blinkingText');

    
   
// // await page.pause();
//     // await dropdown.selectOption("consult");

//     // await page.locator(".radiotextsty").last().click();

//     // await page.locator("#okayBtn").click();

//     // console.log(await page.locator(".checkmark").last().isChecked());

//     // await expect(page.locator(".checkmark").last()).toBeChecked();

//     // await page.locator("#terms").click();

//     // await expect(page.locator("#terms")).toBeChecked();

//     // await page.locator("#terms").uncheck();

//     // expect(await page.locator("#terms").isChecked()).toBeFalsy();

// });

test('my test',async ({browser})=>{
 const  context =await browser.newContext();
 const page=await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const link=await page.locator("[href*='documents-request']");
 const [newPage]=  await Promise.all([
    context.waitForEvent('page'),
    link.click(),
 ])
    const text = await newPage.locator(".red").textContent();
    console.log(text);
});