
const { expect } = require("@playwright/test");

class Howweconnect {
    constructor(page) {
        this.page = page;

        // Dashboard heading
        this.orderheading = page.getByText("Order Records", { exact: true });

        // Order summary cards
        this.totalorder = page.getByText("6", { exact: true });
        this.completedorder = page.getByText("2", { exact: true });
        this.pendingorder = page.locator('path.recharts-sector[name="Pending"]');
        this.cancelledorder = page.getByText("1", { exact: true });

        // Pie chart
        this.pendingchart = page.locator('path.recharts-sector[name="Pending"]');

        // Chart tooltip
       this.tooltip = page.locator(".recharts-tooltip-wrapper")
    .filter({ hasText: "Pending" });
    }

    async Openpage() {
        await this.page.goto("https://ecommerence-bay.vercel.app/");
    }

    async Scrollbottom() {
        await this.orderheading.scrollIntoViewIfNeeded();
    }

    async VerifyHeading() {
        await expect(this.orderheading).toBeVisible();
    }

    async VerifyPendingChart() {
        await expect(this.pendingchart).toBeVisible();
        await expect(this.pendingchart).toHaveAttribute("name", "Pending");
    }

async HoverPendingChart() {
    await this.pendingchart.hover();

    await expect(this.tooltip.first()).toBeVisible();
    await expect(this.tooltip.first()).toContainText("Pending");
    await expect(this.tooltip.first()).toContainText("3");
}
}

module.exports = { Howweconnect };