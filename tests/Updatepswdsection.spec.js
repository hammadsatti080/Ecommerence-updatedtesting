
const { test, expect } = require('@playwright/test');
const { ForgetPasswordPage } = require('../pages/Updatepswdsection');

test('Update password', async ({ page }) => {
    const forget = new ForgetPasswordPage(page);

    await page.goto('https://ecommerence-bay.vercel.app/userlogin');

    await forget.openLogin();
    await forget.openForgotPassword();

    await forget.enterEmail('hammad@gmail.com');

    // Enter the actual CAPTCHA displayed on the website.
    await forget.enterCaptcha('YOUR_CAPTCHA_VALUE');
    await forget.verifyCaptcha();

    // Verify that the password field appears after successful verification.
    await expect(forget.newPasswordInput).toBeVisible({
        timeout: 10000
    });

    await forget.enterNewPassword('111111');
    await forget.clickUpdatePassword();

    // Close the modal only if it remains open.
    if (await forget.closeModalButton.isVisible()) {
        await forget.closeResetModal();
    }
});
