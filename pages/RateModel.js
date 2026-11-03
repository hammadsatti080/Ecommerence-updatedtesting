
import { expect } from '@playwright/test';

export class ReviewPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', {
      name: 'Enter your email'
    });

    this.feedbackInput = page.getByRole('textbox', {
      name: 'Write feedback...'
    });

    this.submitButton = page.getByRole('button', {
      name: 'Submit Review'
    });

    this.emptyNameButton = page.getByRole('button').filter({
      hasText: /^$/
    });
  }


  async clickReviewButton() {
    await this.emptyNameButton.click();
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterFeedback(feedback) {
    await this.feedbackInput.fill(feedback);
  }

  async submitReview() {
    await this.submitButton.click();
  }
}

module.exports = { ReviewPage };