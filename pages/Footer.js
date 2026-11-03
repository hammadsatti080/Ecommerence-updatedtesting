
const { expect } = require("@playwright/test");

class Footer {
    constructor(page) {
        this.page = page;

        this.contact = page.locator('footer a[href="/FAQ"]').first();

        this.product = page.locator('footer a[href="/prod"]').first();
    }

    async Openfile() {
        await this.page.goto("https://ecommerence-bay.vercel.app/");
    }

    async ScrollDown(times) {
        for (let i = 0; i < times; i++) {
            await this.page.locator("body").press("ArrowDown");
        }
    }

    async Links() {
        await this.contact.click();

        await expect(this.page).toHaveURL(
            "https://ecommerence-bay.vercel.app/FAQ"
        );

        await this.page.goBack();

        await this.product.click();

        await expect(this.page).toHaveURL(
            "https://ecommerence-bay.vercel.app/prod"
        );
    }
}

module.exports = { Footer };
