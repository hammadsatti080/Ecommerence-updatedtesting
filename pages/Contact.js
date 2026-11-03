
import { expect } from '@playwright/test';

export class ContactPage {
    constructor(page) {
        this.page = page;

        // Quantity controls
        this.plusButton = page.getByText('+').first();
        this.minusButton = page.getByText('−');

        // Contact form fields
        this.nameInput = page.getByRole('textbox', {
            name: 'Your Name'
        });

        this.emailInput = page.getByRole('textbox', {
            name: 'Email'
        });

        this.messageInput = page.getByRole('textbox', {
            name: 'Message'
        });

        // Rating buttons
        this.ratingButtons = page.getByRole('button', {
            name: '★'
        });

        // Submit button
        this.sendMessageButton = page.getByRole('button', {
            name: 'Send Message'
        });

        // Validation messages
        this.nameError = page.getByText(
            'Name is required', { exact: true }
        );

        this.emailError = page.getByText(
            'Email is required', { exact: true }
        );

        this.messageError = page.getByText(
            'Message is required', { exact: true }
        );

        this.emailInvalidError = page.getByText(
            'Invalid email', { exact: true }
        );

        // Change these locators to match the actual
        // validation text displayed by your application.
        this.ratingError = page.getByText(
            'Please select rating', { exact: true }
        );
    }

    async openWebsite() {
        await this.page.goto(
            'https://ecommerence-bay.vercel.app/'
        );
    }

    async scrollToContactForm() {
        await this.nameInput.scrollIntoViewIfNeeded();
    }

    async increaseQuantity() {
        await this.plusButton.click();
    }

    async decreaseQuantity() {
        await this.minusButton.click();
    }

    async enterName(name) {
        await this.nameInput.fill(name);
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async selectRating(stars = 5) {
        if (stars < 1 || stars > 5) {
            throw new Error('Rating must be between 1 and 5');
        }

        await this.ratingButtons.nth(stars - 1).click();
    }

    async enterMessage(message) {
        await this.messageInput.fill(message);
    }

   
async submitForm() {
    await this.sendMessageButton.scrollIntoViewIfNeeded();

    console.log(
        'Button count:',
        await this.sendMessageButton.count()
    );

    console.log(
        'Button enabled:',
        await this.sendMessageButton.isEnabled()
    );

    await this.sendMessageButton.click({ timeout: 10000 });
}


    async expectNameRequired() {
        await expect(this.nameError).toBeVisible();
    }

    async expectEmailRequired() {
        await expect(this.emailError).toBeVisible();
    }

    async expectMessageRequired() {
        await expect(this.messageError).toBeVisible();
    }

    async expectEmailInvalid() {
        await expect(this.emailInvalidError).toBeVisible();
    }

    async expectRatingRequired() {
        await expect(this.ratingError).toBeVisible();
    }
}

module.exports = {ContactPage}