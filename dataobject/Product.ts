export class Product {
    public productName: string;
    public productDescription: string;

    constructor({ productName, productDescription }: { productName: string; productDescription: string, }) {
        this.productName = productName;
        this.productDescription = productDescription;
    }
}
