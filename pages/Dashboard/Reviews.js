const { expect } = require("@playwright/test");

class Review {
    constructor(page) {
        this.page = page;

        this.searchInput = page.getByPlaceholder(
    "Search by name, email or message..."
);
this.review = page.getByText("Reviews");

    }

    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/dashboards",
            { waitUntil: "domcontentloaded" }
        );
        await this.review.click();
    }

    async data(value) {
        await this.searchInput.fill(value);
    }

        async verifyReviewtextVisible() {
        await expect(
          this.page.locator('h3:has-text("Hammad)').nth(0)
          ).toBeVisible();
    }

    async verifyReviewVisible(value) {
        await expect(
            this.page.getByText(value, { exact: false })
          
        ).toBeVisible();
    }

    async verifyNoReview(value) {
        await expect(
            this.page.getByText(value, { exact: false })
        ).toHaveCount(0);
    }
}

module.exports = { Review };