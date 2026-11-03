const { test } = require("@playwright/test");
const { Adminloginpage } = require("../pages/Adminloginform");
test.describe("Login auth", () => {
    test("Admin login successfully", async ({ page }) => {
        const admin = new Adminloginpage(page);

        // Open login page
        await admin.openLoginPage();

        // Handle JavaScript dialog if one appears
        page.once("dialog", async dialog => {
            console.log("Dialog message:", dialog.message());
            await dialog.dismiss();
        });

        // Login with admin credentials
        await admin.login("admin@gmail.com", "123456");

        // Verify dashboard URL
        await admin.verifyDashboard();
    });

    test("Login with invalid data ", async ({ page }) => {

        const admin = new Adminloginpage(page);

        // Open login page
        await admin.openLoginPage();

        // Handle JavaScript dialog if one appears
        page.once("dialog", async dialog => {
            console.log("Dialog message:", dialog.message());
            await dialog.dismiss();
        });

        // Login with admin credentials
        await admin.login("asjad@gmail.com", "12346");

        await admin.Alertmsg();

    });

    test("Login with Empty data ", async ({ page }) => {

        const admin = new Adminloginpage(page);

        // Open login page
        await admin.openLoginPage();

        // Handle JavaScript dialog if one appears
        page.once("dialog", async dialog => {
            console.log("Dialog message:", dialog.message());
            await dialog.dismiss();
        });

        // Login with admin credentials
        await admin.login("", "");

        await admin.Alertmsg();

    });

    test("Login with Wrong format data ", async ({ page }) => {

        const admin = new Adminloginpage(page);

        // Open login page
        await admin.openLoginPage();

        // Handle JavaScript dialog if one appears
        page.once("dialog", async dialog => {
            console.log("Dialog message:", dialog.message());
            await dialog.dismiss();
        });

        // Login with admin credentials
        await admin.login("hammadgmail.com", "abcd");

        await admin.Alertemptymsg();

    });
})
