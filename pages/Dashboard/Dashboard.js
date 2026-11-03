const {expect} = require("@playwright/test")

class AddProduct{
    constructor(page){
        this.page = page;
       this.heading =  page.getByRole("heading" , {name : '⚙️ Admin Panel '})
         this.Expenselink =  page.getByRole("button" , {name : "Expense Record"});
            this.Productlink =  page.getByRole("button" , {name : "Product"});
    this.salelink =  page.getByRole("button" , {name : "Sale"});
            this.Reviewslink =  page.getByRole("button" , {name : "Reviews"});   
    }

    async Opensection(){
        await this.page.goto("https://ecommerence-bay.vercel.app/dashboards");
    }

    async Link(){
        await expect(this.heading).toBeVisible();
        await expect(this.Expenselink).toBeVisible();
        await this.Expenselink.click();
           await expect(this.Productlink).toBeVisible();
        await this.Productlink.click();
           await expect(this.salelink).toBeVisible();
        await this.salelink.click();
           await expect(this.Reviewslink).toBeVisible();
        await this.Reviewslink.click();
    }
}

module.exports = {AddProduct }