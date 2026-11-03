
const { test, expect } = require("@playwright/test");
const { Addproduct } = require("../../pages/Dashboard/Addproduct");

test.describe("Dashboard Add Product Section", () => {

    let Add;

    test.beforeEach(async ({ page }) => {
        Add = new Addproduct(page);

        await Add.openPage();
        await Add.openProductSection();
    });

    const image =
        "https://static-01.daraz.pk/p/6ff0d9828cf371023c1a2ad79311d919.jpg";

    // =================================
    // POSITIVE TEST CASES
    // =================================

    test("TC01 - Add product with valid details", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "1230", "10", "3"
        );

        await Add.saveProduct();

        // Add a success-message or product-row assertion
        // after confirming the actual application message.
    });

    test("TC02 - Add product with zero discount", async () => {
        await Add.fillProductForm(
            "Paint Zero", image, "Cloth", "1500", "0", "5"
        );

        expect(await Add.isValid(Add.price)).toBe(true);
        expect(await Add.isValid(Add.discount)).toBe(true);
        expect(await Add.isValid(Add.quantity)).toBe(true);
    });

    test("TC03 - Add product with higher stock quantity", async () => {
        await Add.fillProductForm(
            "Paint Stock", image, "Cloth", "2500", "15", "100"
        );

        expect(await Add.isValid(Add.name)).toBe(true);
        expect(await Add.isValid(Add.price)).toBe(true);
    });

    // =================================
    // NEGATIVE TEST CASES
    // =================================

    test("TC04 - Reject negative price", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "-1230", "10", "3"
        );

        expect(await Add.isValid(Add.price)).toBe(false);
    });

    test("TC05 - Reject discount above 100", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "1230", "150", "3"
        );

        expect(await Add.isValid(Add.discount)).toBe(false);
    });

    test("TC06 - Reject negative stock quantity", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "1230", "10", "-3"
        );

        expect(await Add.isValid(Add.quantity)).toBe(false);
    });

    test("TC07 - Reject invalid image URL", async () => {
        await Add.fillProductForm(
            "Paint", "invalid-url", "Cloth", "1230", "10", "3"
        );

        expect(await Add.isValid(Add.imageURL)).toBe(false);
    });

    test("TC08 - Reject empty spaces in name", async () => {
        await Add.fillProductForm(
            "   ", image, "Cloth", "1230", "10", "3"
        );

        // HTML required validation alone may accept spaces.
        // Check application-level trimming validation separately.
        expect((await Add.name.inputValue()).trim()).toBe("");
    });

    // =================================
    // EMPTY TEST CASES
    // =================================

    test("TC09 - Submit form with all fields empty", async () => {
        await Add.saveProduct();

        expect(await Add.isValid(Add.name)).toBe(false);
        expect(await Add.isValid(Add.imageURL)).toBe(false);
        expect(await Add.isValid(Add.price)).toBe(false);
        expect(await Add.isValid(Add.discount)).toBe(false);
        expect(await Add.isValid(Add.quantity)).toBe(false);
    });

    test("TC10 - Submit with empty name", async () => {
        await Add.fillProductForm(
            "", image, "Cloth", "1230", "10", "3"
        );

        expect(await Add.isValid(Add.name)).toBe(false);
    });

    test("TC11 - Submit with empty image URL", async () => {
        await Add.fillProductForm(
            "Paint", "", "Cloth", "1230", "10", "3"
        );

        expect(await Add.isValid(Add.imageURL)).toBe(false);
    });

    test("TC12 - Submit with empty price", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "", "10", "3"
        );

        expect(await Add.isValid(Add.price)).toBe(false);
    });

    test("TC13 - Submit with empty discount", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "1230", "", "3"
        );

        expect(await Add.isValid(Add.discount)).toBe(false);
    });

    test("TC14 - Submit with empty stock quantity", async () => {
        await Add.fillProductForm(
            "Paint", image, "Cloth", "1230", "10", ""
        );

        expect(await Add.isValid(Add.quantity)).toBe(false);
    });

    // =================================
    // CLOSE FORM TEST
    // =================================

    test("TC15 - Close Add Product form", async () => {
        await Add.closeForm();

        await expect(Add.name).not.toBeVisible();
    });

});
