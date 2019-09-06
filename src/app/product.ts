export class Product {
    public productName: string;
    public productType: string;
    public price: string;
    public description?: string;
    public vegetarian?: number;
    public alcohol?: number;
    public country?: string;
    public personCount?: number;
    public optional_addition?: string;

    constructor(defaultProduct: string, defaultCountry: string) {
        this.productName = '',
        this.productType = defaultProduct,
        this.price = "0.00",
        this.description = '',
        this.vegetarian = 0,
        this.alcohol = 1,
        this.country = defaultCountry,
        this.personCount = 1,
        this.optional_addition = ''
    }
}