const { expect } = require("@playwright/test")

class Adminauth{
    constructor(page){
 this.page = page;
  this.buttonaut  =  page.getByRole('button', { name: 'Admin Mode Access system' }); 
  this.userauthbutton = page.getByRole('button', {name : 'User Mode Access'});
}

    async handlepage(){
       await this.page.goto("https://ecommerence-bay.vercel.app/mainauth");
    }

    async handleadminauth(){
        await this.buttonaut.click();
    }

    async handleuserside(){
    await this.userauthbutton.click();
    }
}

module.exports = {Adminauth}