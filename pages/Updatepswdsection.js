
class ForgetPasswordPage {
    constructor(page) {
        this.page = page;

        // Login and Forgot Password
        this.accountLoginText = page.getByText(
            'Already have account? Login'
        );
        this.loginText = page.getByText('Login');
        this.forgetButton = page.getByRole('button', {
            name: 'Forget Password'
        });

        // Reset Password form
        this.emailInput = page.locator('input[type="email"]');
        this.captchaInput = page.getByRole('textbox', {
            name: 'Type CAPTCHA'
        });
        this.verifyCaptchaButton = page.getByRole('button', {
            name: 'Verify CAPTCHA'
        });

        this.newPasswordInput = page.getByRole('textbox', {
            name: 'New Password'
        });
        this.updatePasswordButton = page.getByRole('button', {
            name: 'Update Password'
        });
        this.closeModalButton = page.getByRole('button', {
            name: '×'
        });
    }

    async openLogin() {
        await this.accountLoginText.click();
        await this.loginText.click();
    }

    async openForgotPassword() {
        await this.forgetButton.click();
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterCaptcha(captcha) {
        await this.captchaInput.fill(captcha);
    }

    async verifyCaptcha() {
        await this.verifyCaptchaButton.click();
    }

    async enterNewPassword(password) {
        await this.newPasswordInput.waitFor({
            state: 'visible',
            timeout: 10000
        });
        await this.newPasswordInput.fill(password);
    }

    async clickUpdatePassword() {
        await this.updatePasswordButton.click();
    }

    async closeResetModal() {
        await this.closeModalButton.click();
    }

    async updatePasswordFlow(email, captcha, password) {
        await this.openLogin();
        await this.openForgotPassword();
        await this.enterEmail(email);
        await this.enterCaptcha(captcha);
        await this.verifyCaptcha();
        await this.enterNewPassword(password);
        await this.clickUpdatePassword();
    }
}

module.exports = { ForgetPasswordPage };
