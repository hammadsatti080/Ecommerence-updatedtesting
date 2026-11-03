const { expect } = require("@playwright/test");

class Catagory {
    constructor(page) {
        this.page = page;

        this.input = page.getByPlaceholder(
            "Enter category (e.g. Beauty)"
        );

        this.addButton = page.getByRole("button", {
            name: "Add"
        });

        this.backButton = page.getByRole("button", {
            name: "Go back"
        });

        this.makeup = page.getByRole("heading", {
            name: "Makeup",
            exact: true
        });
    }

    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/catagory",
            { waitUntil: "domcontentloaded" }
        );
    }

    async addCategory(data) {
        await this.input.fill(data);
        await this.addButton.click();
    }

    async verifyCategoryVisible(category) {
        await expect(
            this.page.getByRole("heading", {
                name: category,
                exact: true
            })
        ).toBeVisible();
    }

    async verifyCategoryNotVisible(category) {
        await expect(
            this.page.getByRole("heading", {
                name: category,
                exact: true
            })
        ).toHaveCount(0);
    }

    async goBack() {
        await this.backButton.click();

        await expect(this.page).toHaveURL(
            "https://ecommerence-bay.vercel.app/dashboards"
        );
    }
}

module.exports = { Catagory };