const { expect, test } = require("@playwright/test")
const { Homesec } = require("../pages/Home")
test.describe("Home Components tests", () => {
    let Homesection;
    test.beforeEach("Home page", async ({ page }) => {
        Homesection = new Homesec(page)
        await Homesection.Openpage();
    }


    )
    test("Home page should open successfully", async ({ page }) => {
        await expect(page).toHaveURL(
            "https://ecommerence-bay.vercel.app/"
        );
    });

    test("Button navigations", async ({ page }) => {
        await Homesection.HomeTopcomponent();
    });
    test("crossbutton", async ({ page }) => {
        await Homesection.crossbutton();
    });

    test("Flipping", async ({ page }) => {
        await Homesection.fliping();
    })
    test("Grid card", async ({ page }) => {
        await Homesection.Gridcards();
    })
      test("Dropdown", async ({ page }) => {
        await Homesection.Dropdown();
    })

})