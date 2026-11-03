
const { test, expect } = require("@playwright/test");
const { ReviewScroll } = require("../pages/ReviewScroll");

test.describe("Home Page Test", () => {

    let home;

    test.beforeEach(async ({ page }) => {
        home = new ReviewScroll(page);
        await home.Openpage();
    });

    test("Scroll and Canvas Click Test", async () => {

        // Scroll down
        await home.ScrollDown(70);

        // Scroll up
        await home.ScrollUp(11);

        // Scroll down again
        await home.ScrollDown(2);

        // Canvas clicks
        await home.CanvasClick(38, 140);
        await home.CanvasClick(300, 4);

        // Final scrolling
        await home.ScrollDown(11);

    });

});
