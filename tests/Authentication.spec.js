const {test , expect } = require("@playwright/test")
const { Adminauth } = require("../pages/Authentication")

test.describe("Admin auth" , ()=>{
 test("Positive Admin data data ", async({page})=>{
    const Adminaut = new Adminauth(page);
   await Adminaut.handlepage();
  await Adminaut.handleadminauth();
  await expect(page).toHaveURL("https://ecommerence-bay.vercel.app/Login");
 
})
 test("Positive User data " , async({page})=>{
     const Userauth = new Adminauth(page);
   await Userauth.handlepage();
    await Userauth.handleuserside();
    await expect(page).toHaveURL("https://ecommerence-bay.vercel.app/userlogin");
   
 
 })

})