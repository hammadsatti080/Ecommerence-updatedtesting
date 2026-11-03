const { expect } = require("@playwright/test");

class Learnbutton {
    constructor(page) {
        this.page = page;
        this.learnmore = page.getByRole("button", {
            name: "Learn More"
        });
          this.image = page.getByAltText("HS perfume");
         this.search =  page.getByPlaceholder("Search...");
         this.cosmetic = page.getByRole("heading", { name: "Cosmatic"  } , { exact: true });
               this.cosmeticmakeup = page.getByAltText("Makeup Kit" ).first();
        this.learnless =page.getByRole("button", {
            name: "Show Less"});
    }

  

    async Openpage() {
        await this.page.goto(
            "https://ecommerence-bay.vercel.app/prod",
            { waitUntil: "domcontentloaded" }
        );
    }

    async ScrollDown() {
        for (let i = 0; i < 30; i++) {
            await this.page.mouse.wheel(0, 60);
            await this.page.waitForTimeout(50);
        }
    }

    async Expend() {
        await expect(this.learnmore).toBeVisible({ timeout: 15000 });
        await this.learnmore.click();
        await expect(this.image).toBeVisible();
    }
     async Compress() {
        await expect(this.learnless).toBeVisible({ timeout: 15000 });
        await this.learnmore.click();
        await expect(this.image).not.toBeVisible();
    }
    async Search(Data){
        await this.search.fill(Data);
       // await expect(this.cosmetic).toBeVisible();
       // await expect( this.cosmeticmakeup).toBeVisible();
    }
}

module.exports = { Learnbutton };