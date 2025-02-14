//impots
import { Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

//Locators
const productCreateButton = "//button[@role='button'][text()='Create Products']";
const productTitle = (productTitleName: string) =>   `//div[@class='product-cards']//h3[contains(.,'${productTitleName}')]`;

export class ProductListPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

     clickOnCreateProductButton = async () =>  await this.clickOnButton(productCreateButton);

     getProductTitle = async (productName:string) => await this.page.locator(productTitle(productName)).textContent(); 
}