//impots
import { Page } from "@playwright/test";
import { BasePage } from "../../BasePage";
import { Product } from "../../dataobject/Product";
import { Brand } from "../../enum/Brand";
import { ProductCategory } from "../../enum/ProductCategory";

//Locators
const productNameTextbox = "//span[contains(.,'Product Name')]//parent::div//following-sibling::div//input";
const productDescriptionTextBox = "//textarea[contains(@placeholder,'Description')]";
const productFileUploadButton = "//button[contains(.,'Select image from gallery')]";
const productCreateButton = "//label[contains(.,'Active')]//following-sibling::button";
const productUploadNewImageButton = "//button[normalize-space()='Upload new image']";
const uploadImageButton = "#file-upload-input";
const openBrandDropdown = "//h3[.='Image Gallery']//following::label[normalize-space()='Brands']//ancestor::div[@role='label']//following-sibling::div//input";
const openSubBrandsDropdown = "//label[normalize-space()='Sub-brands']//ancestor::div[@role='label']//following-sibling::div//input/following-sibling::div";
const productCategoryDropdown= "//div[contains(.,'Product Category*') and @class='label-element']//following-sibling::div//div[@role='combobox']";
const filePath = "playwrighthelper/product.jpg";
const brandOption = (brandName: string) => `//h3[.='Image Gallery']//following::a[contains(.,'${brandName}')]`;
const productCategoryText = (productCategoryName: string) => `//li[normalize-space()='${productCategoryName}']`;

export class ProductPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    /**
   * Enters the product details and clicks on the create button.
   * @param {Product} productDetails - The product details.
   */
    async enterTheProductDetailsAndClicksOnTheCreateProductButton(productDetails: Product) {
        await this.enterText(productNameTextbox, productDetails.productName);
        await this.enterText(productDescriptionTextBox, productDetails.productDescription);
        await this.clickOnButton(productCategoryDropdown);
        await this.selectProductCategory(ProductCategory.BEVERAGE);
        await this.uploadProductFile();
        await this.waitForLocator(productCreateButton);
        await this.clickOnButton(productCreateButton);
    }

    async uploadProductFile() {
        await this.clickOnButton(productFileUploadButton);
        await this.clickOnButton(productUploadNewImageButton);
        await this.clickOnButton(openBrandDropdown);
        await this.selectBrand(Brand.MIRINDA);
        await this.clickOnSaveOption();
        await this.clickOnButton(openSubBrandsDropdown);
        await this.selectBrand(Brand.SARSI);
        await this.clickOnSaveOption();
        await this.uploadFile(uploadImageButton,filePath);
    }

    selectBrand = async (brand:Brand) =>  await this.clickOnButton(brandOption(brand));

    clickOnSaveOption = async () => await this.page.getByRole('button', { name: 'Save options' }).click({force:true});

    selectProductCategory = async (productCategory:ProductCategory) =>  await this.clickOnButton(productCategoryText(productCategory));

}
