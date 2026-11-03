
const { expect } = require("@playwright/test");

class ProductPage {
  constructor(page) {
    this.page = page;

    // Product section
    this.learnMore = page.getByRole("button", { name: "Learn More" });
    this.addToCart = page.getByRole("button", { name: "Add to Cart" });

    this.makeupProduct = page.getByText(
      "Makeup50004000.00 (-20%)Stock: 11🤍 SaveAdd to CartLipstick500475.00 (-5%)Stock",
      { exact: false }
    );

    // Why Choose Us
    this.whyChooseUs = page.locator("div")
      .filter({ hasText: "Why Choose Us ?Delivering" })
      .nth(2);

    // Cart section
    this.cartButton = page.getByRole("button", { name: "🛒" });
    this.plusButton = page.getByRole("button", { name: "+" });
    this.minusButton = page.getByRole("button", { name: "-" });
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.emailError = page.getByText(
  "Email not registered! Please sign up first."
);
 
 
    // Checkout form
    this.fullName = page.getByRole("textbox", {
      name: "Enter your full name"
    });

    this.email = page.getByRole("textbox", {
      name: "Enter your email"
    });

    this.address = page.getByRole("textbox", {
      name: "Enter your address"
    });

    this.phone = page.getByRole("textbox", {
      name: "03XX-XXXXXXX"
    });

    this.payNow = page.getByRole("button", { name: "Pay Now" });
  }

  
  // Open product page
  async openPage() {
    await this.page.goto(
      "https://ecommerence-bay.vercel.app/prod",
      {
        waitUntil: "domcontentloaded",
        timeout: 60000
      }
    );

    await expect(this.learnMore).toBeVisible({
      timeout: 30000
    });
  }

  // Scroll down
  async scrollDown(times) {
    for (let i = 0; i < times; i++) {
      await this.page.mouse.wheel(0, 60);
      await this.page.waitForTimeout(50);
    }
  }

  // Scroll up
  async scrollUp(times) {
    for (let i = 0; i < times; i++) {
      await this.page.mouse.wheel(0, -60);
      await this.page.waitForTimeout(50);
    }
  }

  // Learn More
  async learnMoreSection() {
    await this.learnMore.scrollIntoViewIfNeeded();
    await this.learnMore.click();
  }

  // Add products
  async addProducts() {
    await this.addToCart.nth(2).click();
    await this.addToCart.nth(3).click();
  }

  // Select Makeup product
  async selectMakeupProduct() {
    await this.makeupProduct.click();
  }

  // Why Choose Us
  async chooseUsSection() {
    await this.whyChooseUs.scrollIntoViewIfNeeded();
    await this.whyChooseUs.click();
  }

  // Open cart
  async openCart() {
    await this.cartButton.click();
  }

  // Change quantity
  async changeQuantity() {
    await this.plusButton.first().click();
    await this.minusButton.first().click();
  }

  // Checkout
  async checkout() {
    await expect(this.checkoutButton).toBeVisible({
      timeout: 15000
    });

    await expect(this.checkoutButton).toBeEnabled();

    await this.checkoutButton.scrollIntoViewIfNeeded();

    // Normal click first
    await this.checkoutButton.click({
      timeout: 20000
    });
  }

  
  // Check email validation
 async isEmailInvalid() {
  await expect(this.emailError).toBeVisible();
  return this.emailError;
}

  // Check phone validation
  async isPhoneInvalid() {
    return await this.phone.evaluate(element => {
      return !element.checkValidity();
    });
  }

  // Check full name validation
  async isNameInvalid() {
    return await this.fullName.evaluate(element => {
      return !element.checkValidity();
    });
  }


  // Fill checkout form
  async fillCheckoutForm(Name, Email, City, Phone) {
    await this.fullName.fill(Name);
    await this.email.fill(Email);
    await this.address.fill(City);
    await this.phone.fill(Phone);
  }

  // Pay Now
  async payNowButton() {
    this.page.once("dialog", async dialog => {
      console.log("Dialog message:", dialog.message());
      await dialog.dismiss();
    });

    await this.payNow.click({
      timeout: 20000
    });
  }
}

module.exports = { ProductPage };
