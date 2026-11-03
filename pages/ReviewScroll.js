
const { expect } = require("@playwright/test");

class ReviewScroll {
    constructor(page) {
        this.page = page;

        this.body = page.locator("body");
        this.canvas = page.locator("canvas");
    }

    async Openpage() {
        await this.page.goto("https://ecommerence-bay.vercel.app/");
    }

    // Press ArrowDown multiple times
    async ScrollDown(times) {
        for (let i = 0; i < times; i++) {
            await this.body.press("ArrowDown");
        }
    }

    // Press ArrowUp multiple times
    async ScrollUp(times) {
        for (let i = 0; i < times; i++) {
            await this.body.press("ArrowUp");
        }
    }

    // Click canvas at a specific position
 async CanvasClick(x, y) {
    await this.canvas.first().scrollIntoViewIfNeeded();

    await expect(this.canvas.first()).toBeVisible();

    await this.canvas.first().click({
        position: {
            x: x,
            y: y
        },
        timeout: 15000
    });
}
}

module.exports = { ReviewScroll };
