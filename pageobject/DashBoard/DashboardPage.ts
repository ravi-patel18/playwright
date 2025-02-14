//imports
import { Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

//Locators
const titleText = "//img[@alt='Dashboard Page']";

export class DashBoardPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    /**
     * Retrieves the text content of the specified locator on the page.
     * 
     * @returns - The text content of the locator.
     */
    getTitleText = async () => await this.page.locator(titleText).textContent();

    isElementVisible = async () => await this.page.locator(titleText).isVisible({ timeout: 900000 });

    waitForLocator = async () => await this.page.locator(titleText).waitFor({state:"visible"});


}
