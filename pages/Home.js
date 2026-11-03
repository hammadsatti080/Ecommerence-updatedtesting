const { expect } = require("@playwright/test")

class Homesec {
    constructor(page) {
        this.page = page;
        this.explorebutton = page.getByRole("button", { name: /Explore Products/ });
        this.Termsbutton = page.getByRole("button", { name: /Terms & Conditions/ });
        this.orderguideline = page.getByText("Order Guidelines");
     //   this.cross = page.getByRole("button", { name: /×/ });
        this.cross =   page.getByRole('button', { name: '×' });
        this.flip = page.getByText("Tap to flip →");
        this.backflip = page.getByText("Contact Info");
        this.product = page.getByRole("button", { name: /Makeup/ });
        this.fliptext = page.getByText("Lipstick");
        this.gridimages = page.getByText("Makeup");
       this.alttext =  page.getByAltText("Lipstick");
       this.buybutton = page.getByRole("button" , {name : "Buy Now →" });
       this.sortDropdown = page.getByRole("combobox");
    }
    async Openpage() {
        await this.page.goto("https://ecommerence-bay.vercel.app/");
    }
    async HomeTopcomponent() {
        await this.explorebutton.click();
        await expect(this.page).toHaveURL("https://ecommerence-bay.vercel.app/prod");
        await this.Termsbutton.click();
        await expect(this.orderguideline).toBeVisible();


    }

    async crossbutton() {
        await this.cross.click();
        await expect(this.orderguideline).not.toBeVisible();
    }
    async fliping() {
        await this.flip.click()
        await expect(this.backflip).toBeVisible();
    }

 async Gridcards() {
    await expect(this.alttext).toBeVisible();
    await this.alttext.click();

    await expect(this.fliptext).toBeVisible();

    await this.buybutton.click();

    await expect(this.page).toHaveURL(
        "https://ecommerence-bay.vercel.app/prod/69fa422a5b01f116d5f8e1c3"
    );
}

    
    async Dropdown() { 
   // await this.sortDropdown.selectOption({ label: "Low → High" }); both meathod work
    await this.sortDropdown.selectOption("lowToHigh");
    await expect(this.sortDropdown).toHaveValue("lowToHigh");

    await this.sortDropdown.selectOption("highToLow");
    await expect(this.sortDropdown).toHaveValue("highToLow");
}

}
module.exports = { Homesec }