const { expect } = require("@playwright/test");

class SalePage {
    constructor(page) {
        this.page = page;

        // Sale section
        this.saleButton = page.getByRole("button", {
            name: "💰 Sale"
        });

        // Search email
        this.searchInput = page.getByRole("textbox", {
            name: "Enter email..."
        });

        // Dropdowns
        this.filterStatusDropdown = page.getByRole("combobox").nth(1);

        this.orderStatusDropdown = page.getByRole("combobox").nth(2);

        this.deliveryTimeDropdown = page.getByRole("combobox").nth(3);

        // Orders table
        this.table = page.locator("table");
        this.tableRows = this.table.locator("tbody tr");

        //   this.tableemail =   page.getByText("adilsatti526@gmail.com").nth(0);
        // this.table.tableRows.getByText("hammadnarh@gmail.com");

    }

    // Open dashboard
    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/dashboards",
            { waitUntil: "domcontentloaded" }
        );
    }

    // Open Sale section
    async openSaleSection() {
        await this.saleButton.click();

        await expect(this.searchInput).toBeVisible();
    }

    // Search by email
    async searchByEmail(email) {
        await this.searchInput.fill(email);
    }

    // Verify email appears
    async verifyEmailVisible(email) {
        await expect(
            this.table.getByText(email, { exact: true })
        ).toBeVisible();
    }

    // Verify no matching email
    async verifyEmailNotVisible(email) {
        await expect(
            this.table.getByText(email, { exact: true })
        ).toHaveCount(0);
    }

    // Select filter status
    async selectFilterStatus(status) {
        await this.filterStatusDropdown.selectOption(status);

        await expect(this.filterStatusDropdown).toHaveValue(status);
    }

    // Select order status
    async selectOrderStatus(status) {
        await this.orderStatusDropdown.selectOption(status);

        await expect(this.orderStatusDropdown).toHaveValue(status);
    }

    // Select delivery time
    async selectDeliveryTime(time) {
        await this.deliveryTimeDropdown.selectOption(time);

        await expect(this.deliveryTimeDropdown).toHaveValue(time);
    }

    // Verify table has orders
    async verifyTableHasRows() {
        await expect(this.tableRows.first()).toBeVisible();
    }

    /* async verifyemailvisibility(){
         await expect(this.tableemail).toBeVisible();
         await expect(this.tableemail).toHaveCount(1);
     } */
}

module.exports = { SalePage };