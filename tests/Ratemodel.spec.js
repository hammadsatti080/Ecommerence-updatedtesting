
import { test, expect } from '@playwright/test';
import { ReviewPage } from '../pages/RateModel';

test('Submit a review successfully', async ({ page }) => {
  const reviewPage = new ReviewPage(page);

  // Open website
  await page.goto("https://ecommerence-bay.vercel.app/");

  // Click review button
  await reviewPage.clickReviewButton();

  // Enter email
  await reviewPage.enterEmail('adil@gmail.com');

  // Enter feedback
  await reviewPage.enterFeedback('xyzzz');

  // Handle JavaScript dialog
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });

  // Submit review
  await reviewPage.submitReview();
});
