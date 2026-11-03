
const { expect } = require("@playwright/test");

class Addproduct {
    constructor(page) {
        this.page = page;

        this.productButton = page.getByRole("button", {
            name: "📦 Product"
        });

        this.addProductButton = page.getByRole("button", {
            name: "+ Add Product"
        });

        this.name = page.getByRole("textbox", {
            name: "Name"
        });

        this.imageURL = page.getByRole("textbox", {
            name: "Image URL"
        });

        this.category = page.locator('select[name="category"]');

        this.price = page.getByRole("textbox", {
            name: "Price"
        });

        this.discount = page.getByRole("textbox", {
            name: "Discount %"
        });

        this.quantity = page.getByRole("textbox", {
            name: "Stock Quantity"
        });

        this.saveButton = page.getByRole("button", {
            name: "Save"
        });

        this.closeButton = page.getByRole("button", {
            name: "Close"
        });
    }

    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/dashboards",
            { waitUntil: "domcontentloaded" }
        );
    }

    async openProductSection() {
        await expect(this.productButton).toBeVisible({
            timeout: 20000
        });

        await this.productButton.click({
            timeout: 30000
        });

        await this.addProductButton.click();

        await expect(this.name).toBeVisible({
            timeout: 20000
        });
    }

    async fillProductForm(
        Name,
        ImageURL,
        Category,
        Price,
        Discount,
        Quantity
    ) {
        await this.name.fill(Name);
        await this.imageURL.fill(ImageURL);
        await this.category.selectOption(Category);
        await this.price.fill(Price);
        await this.discount.fill(Discount);
        await this.quantity.fill(Quantity);
    }

    async saveProduct() {
        await this.saveButton.click();
    }

    async closeForm() {
        await this.closeButton.click();
    }

    async isValid(locator) {
        return await locator.evaluate(
            element => element.checkValidity()
        );
    }
}

module.exports = { Addproduct };
