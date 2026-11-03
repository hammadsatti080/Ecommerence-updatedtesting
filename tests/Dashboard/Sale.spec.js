const { test, expect } = require("@playwright/test");
const { SalePage } = require("../../pages/Dashboard/Sale");

test.describe("Dashboard Sale Section", () => {

    let sale;

    test.beforeEach(async ({ page }) => {
        sale = new SalePage(page);

        await sale.openPage();
        await sale.openSaleSection();
    });

    // TC01 - Search using registered email
    test("TC01 - Search registered email", async () => {
        await sale.searchByEmail("adilsatti526@gmail.com");

        await sale.verifyEmailVisible("adilsatti526@gmail.com");
    });

    // TC02 - Search using invalid email
    test("TC02 - Search unregistered email", async () => {
        await sale.searchByEmail("unknown123@gmail.com");

        await sale.verifyEmailNotVisible("unknown123@gmail.com");
    });

    // TC03 - Search using empty input
    test("TC03 - Search with empty email", async () => {
        await sale.searchByEmail("");

        await sale.verifyTableHasRows();
    });

    // TC04 - Filter Pending
    test("TC04 - Select Pending filter", async () => {
        await sale.selectFilterStatus("pending");
    });

    // TC05 - Filter Completed
    test("TC05 - Select Completed filter", async () => {
        await sale.selectFilterStatus("completed");
    });

    // TC06 - Filter Cancelled
    test("TC06 - Select Cancelled filter", async () => {
        await sale.selectFilterStatus("cancelled");
    });

    // TC07 - Show All statuses
    test("TC07 - Select All filter", async () => {
        await sale.selectFilterStatus("");
        await sale.verifyTableHasRows();
    });

    // TC08 - Select Cancelled order status
    test("TC08 - Select Cancelled order status", async () => {
        await sale.selectOrderStatus("cancelled");
    });

    // TC09 - Select Delivered order status
    test("TC09 - Select Delivered order status", async () => {
        await sale.selectOrderStatus("delivered");
    });

    // TC10 - Select delivery time 1 week
    test("TC10 - Select delivery time 1 week", async () => {
        await sale.selectDeliveryTime("1 week");
    });

    // TC11 - Select delivery time 1-2 days
    test("TC11 - Select delivery time 1-2 days", async () => {
        await sale.selectDeliveryTime("1-2 days");
    });

    // TC12 - Select delivery time 1 month
    test("TC12 - Select delivery time 1 month", async () => {
        await sale.selectDeliveryTime("1 month");
    });

    // TC13 - Search email and filter Pending together
    test("TC13 - Search email with Pending filter", async () => {
        await sale.searchByEmail("adilsatti526@gmail.com");

        await sale.selectFilterStatus("pending");

        await sale.verifyEmailVisible("adilsatti526@gmail.com");
    });

});