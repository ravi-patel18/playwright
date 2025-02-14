import { Page } from "@playwright/test";

//locators
const parentTabText = (parentTabName: string) => `//span[normalize-space()='${parentTabName}']`;
const subTabText = (subTabName: string) => `//a[normalize-space()='${subTabName}']`;

export class BasePage {
  constructor(public page: Page) { }

  async navigateToUrl(url: string = "") {

    //Navigate to Home Page
    await this.page.goto(`/${url}`);

    //Handle Alert Pagepup
    await this.acceptTheAlertBoxAndClickOnTheOkButton()

    //Wait till dom is ready to perform action
    await this.waitForLoaderToDisappear();

  }

  /**
   * Fills the specified text value into the input field identified by the given locator.
   * @param {string} locator - The locator or selector for the input field.
   * @param {string} value - The text value to be filled into the input field.
   */
  enterText = async (locator: string, value: string) => await this.page.locator(locator).fill(value);

  uploadFile = async (locator: string, value: string) => {
    await this.page.locator(locator).setInputFiles(value);
};

  /**
  * Clicks on the specified locator.
  * @param {Locator} locator - The Playwright locator to be clicked.
  */
  clickOnButton = async (locator: string, forceClick: boolean = false) => await this.page.locator(locator).click({ force: forceClick });

  /**
   * Scrolls the page down until the scroll Pagesition no longer changes.
   */
  scrollThePageDown = async () => {
    let location: number = 0, newLocation: number = 0;
    do {
      location = newLocation;
      newLocation = await this.page.evaluate(() => document.body.scrollHeight);
      await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    } while (location !== newLocation);
  }

  /**
   * Waits for the document to be in a complete state, indicating that the loader has disappeared.
   */
  waitForLoaderToDisappear = async () => await this.page.waitForFunction(() => document.readyState === "complete");


  /**
   * Accepts the alert dialog box and clicks on the OK button.
   */
  async acceptTheAlertBoxAndClickOnTheOkButton() {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept(); // Accept the alert dialog
    });
  }

  waitForLocator = async (locator: string) => await this.page.locator(locator).waitFor({ state: "visible" });

  async navigateToParentTabAndSubTab(parentTabName: string, subTabName: string) {
    await this.clickOnButton(parentTabText(parentTabName));
    await this.clickOnButton(subTabText(subTabName));
  }

}
