
const { test, expect } = require("@playwright/test");
const { ProductPage } = require("../../pages/Product/Product");

test.describe("Product and Checkout Tests", () => {

    let product;

    // Increase timeout for each test, including beforeEach
    test.setTimeout(90000);

    test.beforeEach(async ({ page }) => {
        product = new ProductPage(page);
        await product.openPage();
    });

    // Reusable method to navigate to checkout
    async function goToCheckout() {
        await product.scrollDown(26);
        await product.learnMoreSection();
        await product.addProducts();
        await product.selectMakeupProduct();
        await product.scrollUp(19);
        await product.scrollDown(9);
        await product.chooseUsSection();
        await product.openCart();
        await product.changeQuantity();
        await product.checkout();
    }

    // Positive Test
    test("Product and Checkout Flow", async () => {

        await goToCheckout();

        await product.fillCheckoutForm(
            "Hammad",
            "hammad@gmail.com",
            "Rwp",
            "12345"
        );

        await product.payNowButton();

        console.log("Product and checkout flow completed!");
    });

    // Negative Test 1: Invalid email

    test("Verify invalid email", async () => {

        await goToCheckout();

        await product.fillCheckoutForm(
            "Hammad",
            "hammadgmail.com",
            "Rwp",
            "03001234567"
        );
        await product.payNowButton();
        await expect(product.emailError).toHaveText(
            "Email not registered! Please sign up first."
        );

    });


    // Negative Test 2: Invalid phone
    test("Verify invalid phone number", async () => {

        await goToCheckout();

        await product.fillCheckoutForm(
            "Hammad",
            "hammad@gmail.com",
            "Rwp",
            "xyzzzz"
        );

        await product.payNowButton();
        await expect(product.isPhoneInvalid).toHaveText(
            "Email not registered! Please sign up first."
        );
    });

    // Negative Test 3: Empty name
    test("Verify empty name field", async () => {

        await goToCheckout();

        await product.fillCheckoutForm(
            "",
            "",
            "Rwp",
            "03001234567"
        );

        await product.payNowButton();
        await expect(page).toContainText("Email not registered! Please sign up first.")
    });

});
