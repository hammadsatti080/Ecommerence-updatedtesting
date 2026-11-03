
const {expect , test} = require("@playwright/test")
const {Footer} = require("../pages/Footer")

test.describe("Footer", ()=>{
    test("Footer", async({page})=>{
     
        let footer = new Footer(page);
        await footer.Openfile(); 
        await footer.ScrollDown(70);
        await footer.Links();
    })

})
