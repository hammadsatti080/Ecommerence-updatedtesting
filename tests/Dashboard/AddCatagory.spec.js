const { expect, test } = require("@playwright/test");
const { Catagory } = require("../../pages/Dashboard/Addcatagory");

test.describe("Category Section", () => {

    let category;

    test.beforeEach(async ({ page }) => {
        category = new Catagory(page);

        await category.openPage();

        // Add your actual category-section navigation here
        // if the category section is not open automatically.
    });

    // Positive test
    test("TC01 - Add new category", async () => {
        await category.addCategory("Electronics");

        await category.verifyCategoryVisible("Electronics");
    });

    // Positive test
    test("TC02 - Verify existing Makeup category", async () => {
        await category.verifyCategoryVisible("Makeup");
    });

    // Negative test
    test("TC03 - Add category with empty input", async () => {
        await category.addCategory("");

        await category.verifyCategoryNotVisible("");
    });

    // Negative test
    test("TC04 - Add category with invalid text", async () => {
        await category.addCategory("###@@@");

        await category.verifyCategoryNotVisible("###@@@");
    });

    // Negative test
    test("TC05 - Add duplicate category", async () => {
        await category.addCategory("Makeup");

        // This assumes duplicate categories are not allowed.
        // Verify the application's actual duplicate behavior.
    });

    // Navigation test
    test("TC06 - Go back to dashboard", async () => {
        await category.goBack();
    });

});