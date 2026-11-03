
import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/Contact.js';

test.describe('Contact Form Validation', () => {

    let contact;

    test.beforeEach(async ({ page }) => {
        contact = new ContactPage(page);

        await contact.openWebsite();
        await contact.scrollToContactForm();
    });

    // 1. Negative test: submit all fields empty
    test('should show required errors for empty fields', async () => {
        await contact.submitForm();

        await contact.expectNameRequired();
        await contact.expectEmailRequired();
        await contact.expectMessageRequired();

        // Uncomment if rating is required by your application:
        // await contact.expectRatingRequired();
    });

    // 2. Negative test: name is empty
    test('should show error when name is empty', async () => {
        await contact.enterEmail('hammad@gmail.com');
        await contact.selectRating(5);
        await contact.enterMessage('Great product');

        await contact.submitForm();

        await contact.expectNameRequired();
    });

    // 3. Negative test: email is empty
    test('should show error when email is empty', async () => {
        await contact.enterName('Hammad');
        await contact.selectRating(5);
        await contact.enterMessage('Great product');

        await contact.submitForm();

        await contact.expectEmailRequired();
    });

    // 4. Negative test: message is empty
    test('should show error when message is empty', async () => {
        await contact.enterName('Hammad');
        await contact.enterEmail('hammad@gmail.com');
        await contact.selectRating(5);

        await contact.submitForm();

        await contact.expectMessageRequired();
    });

    // 5. Negative test: invalid email
    test('should reject an invalid email address', async () => {
        await contact.enterName('Hammad');
        await contact.enterEmail('hammad123');
        await contact.selectRating(5);
        await contact.enterMessage('Great product');

        await contact.submitForm();

        // Use this assertion if your app shows
        // this custom email validation message.
        await contact.expectEmailInvalid();
    });

    // 6. Negative test: spaces only
    test('should reject whitespace-only name and message', async () => {
        await contact.enterName('   ');
        await contact.enterEmail('hammad@gmail.com');
        await contact.selectRating(5);
        await contact.enterMessage('   ');

        await contact.submitForm();

        await contact.expectNameRequired();
        await contact.expectMessageRequired();
    });

    // 7. Positive test: all valid fields
    test('should accept valid contact form values', async () => {
        await contact.enterName('Hammad');
        await contact.enterEmail('hammad@gmail.com');
        await contact.selectRating(5);
        await contact.enterMessage('Great product');

        await contact.submitForm();

        // Required errors should no longer be visible
        // after valid submission, if the app clears them.
        await expect(contact.nameError).toBeHidden();
        await expect(contact.emailError).toBeHidden();
        await expect(contact.messageError).toBeHidden();
    });

});
