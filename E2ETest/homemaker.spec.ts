import{test, expect }from'@playwright/test';

test('Submit homeMaker Details',async({page})=>{
    await page.goto('https://example.com/dashboard/');
    await page.fill('#homeType','Apartment');
    await page.fill('#budget','50000');
    await page.fill('#location','New York');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://mail.google.com/mail/u/0/#inbox');
});