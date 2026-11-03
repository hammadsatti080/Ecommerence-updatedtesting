
const { test, expect } = require("@playwright/test");
const { Forgetpassword } = require("../pages/Forgetpswd");

test.describe("Forget Password", () => {
    let forget;

    test.beforeEach(async ({ page }) => {
        forget = new Forgetpassword(page);
        await forget.openPage();
    });

    test("Open Forget Password section", async () => {
        await forget.openForgetPassword();
        await expect(forget.email).toBeVisible();
    });

    test("Enter email and verify CAPTCHA", async () => {
        await forget.openForgetPassword();

        await forget.enterEmail("hammad@gmail.com");
        await forget.enterCaptcha("bZb9kN");
        
    });
/*
    test("Update password", async () => {
        await forget.openForgetPassword();

        await forget.enterEmail("hammad@gmail.com");
        await forget.enterCaptcha("bZb9kN");

        await forget.updateNewPassword("12345678");
       
    });
    */
});
