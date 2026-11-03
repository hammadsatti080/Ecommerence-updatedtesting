const {expect , test } = require("@playwright/test")
const {AddProduct} = require("../../pages/Dashboard/Addproduct")
test.describe("Product section" , ()=>{
   let Add;
    test.beforeEach("Open test" , async({page})=>{
     Add = new AddProduct(page);
    await Add.Opensection();
    })
    test("Dashboard test" , async({page})=>{
         
             await Add.Link();
    })
})