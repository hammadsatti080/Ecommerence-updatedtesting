
const { expect } = require("@playwright/test");

class Forgetpassword {
    constructor(page) {
        this.page = page;

        this.loginLink = page.getByText("Login", { exact: true });
        this.forgetButton = page.getByRole("button", {
            name: "Forget Password"
        });

        this.email = page.locator('input[type="email"]');
        this.captcha = page.getByRole("textbox", {
            name: "Type CAPTCHA"
        });
        this.verifyCaptcha = page.getByRole("button", {
            name: "Verify CAPTCHA"
        });

        this.newPassword = page.getByRole("textbox", {
            name: "New Password"
        });
        this.updatePassword = page.getByRole("button", {
            name: "Update Password"
        });

        this.closeButton = page.getByRole("button", {
            name: "×"
        });

    }

    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/userlogin"
        );
    }

    async openForgetPassword() {
        await this.loginLink.click();
        await this.forgetButton.click();
    }

    async enterEmail(email) {
        await this.email.fill(email);
    }

    async enterCaptcha(captchaText) {
        await this.captcha.fill(captchaText);
        await this.verifyCaptcha.click();
    }

   async updateNewPassword(password) {

    
         await expect(this.newPassword).toBeVisible({
        timeout: 5000
    });

        await this.newPassword.fill(password);
        await this.updatePassword.click();
    }
        
    async closeDialog() {
        await this.closeButton.click();
    }
}

module.exports = { Forgetpassword };
