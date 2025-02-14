//impots
import { Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { Login } from "../../dataobject/login";

//Locators
const emailTextBox = "#userid";
const passwordTextBox = "#password";
const loginButton = "#submit";

export class LoginPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    /**
   * Enters the login details (email and password) and clicks on the login button.
   * @param {Login} loginDetails - The login details.
   */
    async enterTheLoginDetailsAndClicksOnTheLoginButton(loginDetails: Login) {
        await this.enterText(emailTextBox, loginDetails.email);
        await this.clickOnButton(loginButton);
        await this.enterText(passwordTextBox, loginDetails.password);
        await this.clickOnButton(loginButton);
    }
}
