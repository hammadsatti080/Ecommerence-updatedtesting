
const { test, expect } = require('@playwright/test');
const { NavbarPage } = require('../pages/Navbar');

test.describe('Navbar navigation', () => {
    test('Navbar links navigate to the correct pages', async ({ page }) => {
        const navbar = new NavbarPage(page);

        await page.goto('https://ecommerence-bay.vercel.app/');

        // Product page
        await navbar.clickProduct();
        await expect(page).toHaveURL(
            'https://ecommerence-bay.vercel.app/prod'
        );

        // Sale page
        await navbar.clickSale();
        await expect(page).toHaveURL(
            'https://ecommerence-bay.vercel.app/sale'
        );

        // Future Collection page
        await navbar.clickFutureCollection();
        await expect(page).toHaveURL(
            'https://ecommerence-bay.vercel.app/collect'
        )

        await navbar.Blogsecton(),
        await expect(page).toHaveURL("https://ecommerence-bay.vercel.app/blog")    
        
         await navbar.Authentication(),
        await expect(page).toHaveURL("https://ecommerence-bay.vercel.app/mainauth")
    
        await navbar.Ratesection()
     
    });
});
