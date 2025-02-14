import { describe } from "node:test";
import { expect, test } from '@playwright/test';
import { LoginData } from '../dataFactory/LoginData';
import { LoginPage } from "../pageobject/Login/LoginPage";
import { ProductPage } from "../pageobject/Product/ProductPage";
import { ProductData } from "../datafactory/ProductData";
import { ProductListPage } from "../pageobject/Product/ProductListPage";
import { navigateToUrl } from "./baseclass";

describe("Product Test", () => {

    test('Verify that the user create a product successfully @positive', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const productListPage = new ProductListPage(page);
        const loginDetails = LoginData.getLoginDetails();
        const productDetails = ProductData.getProductDetails();
        let i: number = 1;

        console.log(`Step ${i}: Navigate to the url`);
        await navigateToUrl(page);

        console.log(`Step ${++i}: Enter the login details and clicks on the login button`);
        await loginPage.enterTheLoginDetailsAndClicksOnTheLoginButton(loginDetails);

        console.log(`Step ${++i}: User clicks on the Content Studio tab and selects the Product menu`);
        await productPage.navigateToParentTabAndSubTab(`Content Studio`, `Products`);

        console.log(`Step ${++i}: User clicks on the Create Product button`);
        await productListPage.clickOnCreateProductButton();

        console.log(`Step ${++i}: User adds the product details and clicks on the Create button`);
        await productPage.enterTheProductDetailsAndClicksOnTheCreateProductButton(productDetails);

        console.log(`Step ${++i}: Verify that the product is created successfully`);
        const productTitle = await productListPage.getProductTitle(productDetails.productName);
        expect(productTitle).toBe(productDetails.productName);

    });

    test('focus this test', async ({ page }) => {

        let i: number = 1;
        console.log(`Step ${i}: Navigate to the url`);
        await navigateToUrl(page);
    });

    test('skip this test', async ({ page }) => {
        let i: number = 1;
        console.log(`Step ${i}: Navigate to the url`);
        await navigateToUrl(page);
    });

    test('skip this test for particular browser', async ({ page, browserName }) => {
        test.skip(browserName === 'firefox', 'Still working on it');
      });

});