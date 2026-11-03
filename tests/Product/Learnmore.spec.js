const { test, expect } = require("@playwright/test");
const { Learnbutton } = require("../../pages/Product/Learnmore");

test("Learn More button", async ({ page }) => {

    const learn = new Learnbutton(page);

    await learn.Openpage();
    await learn.ScrollDown();
    await learn.Expend();
    await learn.Search("Cos");
        await learn.Search("mak");

   // console.log("Learn More button clicked successfully!");
});