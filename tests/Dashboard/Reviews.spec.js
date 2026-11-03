const { test, expect } = require("@playwright/test");
const { Review } = require("../../pages/Dashboard/Reviews");

test.describe("Review Section", () => {

    let review;

    test.beforeEach(async ({ page }) => {
        review = new Review(page);

        await review.openPage();
    });

    // Positive test: Search reviewer name
    test("TC01 - Search using reviewer name", async () => {
        await review.data("Hammad");
        await review.verifyReviewtextVisible();
    });

    // Positive test: Search registered email
    test("TC02 - Search using registered email", async () => {
        await review.data("hammadurrehman080@gmail.com");
        await review.verifyReviewVisible("hammadurrehman080@gmail.com");
    });

    // Negative test: Search invalid text
    test("TC03 - Search using invalid text", async () => {
        await review.data("abcc");
        await review.verifyNoReview("abcc");
    });

    // Negative test: Search random numbers
    test("TC04 - Search using random numbers", async () => {
        await review.data("123456789");
        await review.verifyNoReview("123456789");
    });

    // Negative test: Search unregistered email
    test("TC05 - Search using unregistered email", async () => {
        await review.data("unknown123@gmail.com");
        await review.verifyNoReview("unknown123@gmail.com");
    });

    // Negative test: Search special characters
    test("TC06 - Search using special characters", async () => {
        await review.data("@@@###");
        await review.verifyNoReview("@@@###");
    });

    // Empty test: Clear search field
    test("TC07 - Search with empty input", async () => {
        await review.data("");
    });
});