
const { expect } = require("@playwright/test");

class Signupauth {
    constructor(page) {
        this.page = page;

        this.name = page.getByPlaceholder("Full Name");
        this.email = page.getByPlaceholder("Email");
        this.phone = page.getByPlaceholder("Phone");
        this.pswd = page.getByPlaceholder("Password");
     // this.login = page.getByText("Login");
        this.login = page.locator("p span");

        this.errorMsg = page.getByText(
            "Invalid email or password ❌"
        );
    }

    async openPage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/userlogin"
        );
    }

    async Handledata(Name, Email, Phone, Pswd) {
        await this.name.fill(Name);
        await this.email.fill(Email);
        await this.phone.fill(Phone);
        await this.pswd.fill(Pswd);
    }

    // Validate all fields directly
    async validateData(Name, Email, Phone, Pswd) {

        if (Name.trim() === "") {
            console.log("Name is required ❌");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            console.log("Invalid email format ❌");
        }

        if (!/^[0-9]+$/.test(Phone)) {
            console.log("Phone must contain digits only ❌");
        }

        if (Pswd.length < 6) {
            console.log("Password must be at least 6 characters ❌");
        }

        const valid =
            Name.trim() !== "" &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email) &&
            /^[0-9]+$/.test(Phone) &&
            Pswd.length >= 6;

        expect(valid).toBe(true);
    }

    async Login(){
        await this.login.click();
      
    }
}

module.exports = { Signupauth };
