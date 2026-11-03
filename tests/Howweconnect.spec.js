

const { test, expect } = require("@playwright/test");
const { Howweconnect } = require("../pages/Howweconnect");

test.describe("How we connect & Order Records", () => {

    let connect;

    test.beforeEach(async ({ page }) => {
        connect = new Howweconnect(page);

        await connect.Openpage();
        await connect.Scrollbottom();
    });

    test("Verify Order Records heading", async () => {
        await connect.VerifyHeading();
    });

    test("Verify Pending chart section", async () => {
        await connect.VerifyPendingChart();
    });

    test("Verify Pending chart tooltip", async () => {
        await connect.HoverPendingChart();
    });

});