const { expect } = require("@playwright/test");

class Adminloginpage {
    constructor(page) {
        this.page = page;

        this.email = page.getByRole("textbox", {
            name: "admin@gmail.com"
        });

        this.password = page.getByRole("textbox", {
            name: "••••••••"
        });

        this.loginBtn = page.getByRole("button", {
            name: "Login"
        });

        this.alertmsg = page.getByText(
            "Invalid email or password ❌"
        );

        this.alertempty = page.getByText("Please enter a part followed bt '@' ");
    }

    async openLoginPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/Login"
        );
    }

    async enterEmail(email) {
        await this.email.fill(email);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async verifyDashboard() {
        await expect(this.page).toHaveURL(
            "https://ecommerence-bay.vercel.app/dashboards"
        );

    }

    async Alertmsg() {
        await expect(this.alertmsg).toBeVisible();
    }

    async Alertemptymsg() {
        await this.email.fill("adilgmail.com");

        await this.loginBtn.click();

        const validationMsg = await this.email.evaluate(
            (e) => e.validationMessage
        );
    }

}

module.exports = { Adminloginpage };
