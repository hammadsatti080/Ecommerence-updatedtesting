
const { expect } = require("@playwright/test");

class UserLogin {
    constructor(page) {
        this.page = page;
        // this.email = page.getByPlaceholder("Email");
         this.email = page.getByRole("textbox", {name : 'Email'});
       // this.password = page.getByPlaceholder("Password");
            this.password = page.getByRole("textbox", {name : 'Password'});
        this.login = page.getByRole("button", { name: "Login" });

        this.userNotFound = page.getByText("User not found");
        this.invalidPassword = page.getByText("Invalid password");
      this.loginSuccess = page.getByText("Login successfull!");
    }

    async openPage() {
        await this.page.goto("https://ecommerence-bay.vercel.app/Login");
    }

    async enterData(Email, Password) {
        await this.email.fill(Email);
        await this.password.fill(Password);
    }

    async Login() {
        await this.login.click();
    }

    async emptyFields() {
        await this.Login();
      //  await expect(this.userNotFound).toBeVisible();
    }

    async wrongPassword() {
        await this.Login();
      //  await expect(this.invalidPassword).toBeVisible();
    }

    async successfulLogin() {
        await this.Login();
      //  await expect(this.loginSuccess).toBeVisible();
    }
}

module.exports = { UserLogin };



