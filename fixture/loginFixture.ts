import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pageobject/Login/LoginPage';
import { LoginData } from '../dataFactory/LoginData';

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const loginDetails = LoginData.getLoginDetails();
        await loginPage.enterTheLoginDetailsAndClicksOnTheLoginButton(loginDetails);
        await use(loginPage);
    },

});

export { expect } from '@playwright/test';