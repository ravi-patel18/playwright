import { Product } from "../dataobject/Product";
import { PlayWrightHelper } from "../playwrighthelper/PlaywrightHelper";

const playWrightHelper = new PlayWrightHelper();
export class ProductData {
    /**
     * Creates and returns a product object with valid product details.
     * 
     * @returns {Product} The product object with valid product details.
     */
    static getProductDetails(): Product {
        return new Product({
            productName: "AtProduct" + playWrightHelper.getAlphabeticString(4),
            productDescription: "AT Description"+ playWrightHelper.getAlphabeticString(4),
    
        });
    }
}
