import { LoginData } from '../dataFactory/LoginData';
import { DashBoardPage } from "../pageObject/DashBoard/DashboardPage";
import { navigateToUrl } from "./baseclass";
import { expect, test } from '../fixture/loginFixture';

test.describe("Login Test", () => {

    test('Verify that the registered user should be login successfully', async ({ loginPage, page }) => {

        const dashBoardPage = new DashBoardPage(page);
        const loginDetails = LoginData.getLoginDetails();
        let i: number = 1;

        console.log(`Step ${i}: Navigate to the url`);
        await navigateToUrl(page);

        console.log(`Step ${++i}: Enter the login details and clicks on the login button`);
        await loginPage.enterTheLoginDetailsAndClicksOnTheLoginButton(loginDetails);

        console.log(`Step ${++i}: Verify that pepsico logo is displayed on the dashboard`);
        await dashBoardPage.waitForLocator();
        const pepsicoLogo = await dashBoardPage.isElementVisible();
        expect(pepsicoLogo).toBe(true);
    });

});