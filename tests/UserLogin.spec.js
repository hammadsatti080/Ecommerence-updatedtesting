
const { test } = require("@playwright/test");
const { UserLogin } = require("../pages/UserLogins");

test.describe("Login Validation", () => {
    let loginAuth;

    test.beforeEach(async ({ page }) => {
        loginAuth = new UserLogin(page);
        await loginAuth.openPage();
    });

    test("Empty fields", async () => {
        await loginAuth.emptyFields();
    });

    test("Wrong password", async () => {
        await loginAuth.enterData(
            "ashan@gmail.com",
            "123456"
        );

        await loginAuth.wrongPassword();
    });

    test("Successful login", async () => {
        await loginAuth.enterData(
            "hammad@gmail.com",
            "11223344"
        );

        await loginAuth.successfulLogin();
    });
});
