
const { test } = require("@playwright/test");
const { VerifyAddedProduct } = require("../../pages/Dashboard/VerifyAddedProduct");

test("Verify added product is visible", async ({ page }) => {

    const product = new VerifyAddedProduct(page);

    await product.openPage();

    await product.openProductSection();

    await product.searchProduct();

    await product.verifyProductVisible();

});
