
const { test, expect } = require("@playwright/test");
const { Signupauth } = require("../pages/UserSignup");

test.describe("User Registration Validation", () => {

    let loginAuth;

    test.beforeEach(async ({ page }) => {
        loginAuth = new Signupauth(page);
        await loginAuth.openPage();
    });

    test("Valid data", async () => {
        await loginAuth.validateData(
            "Hammad",
            "hammad@gmail.com",
            "1234567890",
            "Hammad123"
        );
    });

    test("Invalid email", async () => {
        await expect(
            loginAuth.validateData(
                "Hammad",
                "hammadgmail.com",
                "1234567890",
                "Hammad123"
            )
        ).rejects.toThrow();
    });

    test("Invalid phone number", async () => {
        await expect(
            loginAuth.validateData(
                "Hammad",
                "hammad@gmail.com",
                "abcxyz",
                "Hammad123"
            )
        ).toHaveText("Invalid data ");
        //rejects.toThrow();

    });

    test("Empty fields", async () => {
        await expect(
            loginAuth.validateData("", "", "", "")
        ).rejects.toThrow();
    });

    test("Login button" , async()=>{
        await loginAuth.Login();
    })

});
