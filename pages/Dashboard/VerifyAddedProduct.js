
const { expect } = require("@playwright/test");

class VerifyAddedProduct {
    constructor(page) {
        this.page = page;

        this.productButton = page.getByRole("button", {
            name: "📦 Product"
        });

        this.search = page.getByRole("textbox", {
            name: "Search..."
        });

        this.productName = page.getByText("Puppy", {
            exact: true
        });
    }

    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/dashboards",
            { waitUntil: "domcontentloaded" }
        );
    }

    async openProductSection() {
        await this.productButton.click();
        await expect(this.search).toBeVisible();
    }

    async searchProduct() {
        await this.search.fill("Puppy");
        await this.page.waitForTimeout(1000);

    }

    async verifyProductVisible() {
        await expect(this.productName).toBeVisible({
        timeout: 15000
    });
    }
}

module.exports = { VerifyAddedProduct };
