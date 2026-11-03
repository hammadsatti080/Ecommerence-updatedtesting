const { expect } = require("@playwright/test");

class NavbarPage {
    constructor(page) {
        this.page = page;

        this.productLink = page.getByRole('navigation').getByRole('link', {
            name: /Product/
        });



        this.saleLink = page.getByRole('link', {
            name: /Sale/
        });

        this.futureCollectionLink = page.getByRole('link', {
            name: /Future Collection/
        });

        //this.blogsecton = page.getByRole('link',
          //  { name: /Blog / });
        this.blogsecton = page.locator('a[href= "/blog"]')

        this.rate = page.locator("button.btn.border").nth(1);
    

        this.Authenticationbutton = page.getByRole("button",

            { name: /Sign in/ });

        this.modelrate = page.locator(".model-overlay")
    }

    async clickProduct() {
        await this.productLink.click();
    }

    async clickSale() {
        await this.saleLink.click();
    }

    async clickFutureCollection() {
        await this.futureCollectionLink.click();
    }

    async Blogsecton() {
        await this.blogsecton.click();

    }

    async Ratesection() {
        await this.rate.click();
       // await expect(this.modelrate).toBeVisible();
    }

    async Authentication() {
        await this.Authenticationbutton.click();
    }

}

module.exports = { NavbarPage };