class ProductPage {

    private firstProductCategoryLocator: string = "(//ul[contains(@class, 'catalog-navigation-classifier')]/li[@data-id])[1]";
    private firstProductAsideCategoryLocator: string = "(//div[@class='catalog-navigation-list__aside-title'])[1]";
    private firstProductSubCategoryLocator: string = "(//a[@class='catalog-navigation-list__dropdown-item'])[1]";
    private firstProductLocator: string = "(//span[@data-bind='html: product.extended_name || product.full_name'])[1]";
    private firstShopLocator: string = "(//a[contains(@class, 'product-aside__button_cart')][contains(text(),'В корзину')])[1]";

    //

    private get FirstProductCategoryElement() {
        return $(this.firstProductCategoryLocator);
    }

    private get FirstProductAsideCategoryElement() {
        return $(this.firstProductAsideCategoryLocator);
    }

    private get FirstProductSubCategoryElement() {
        return $(this.firstProductSubCategoryLocator);
    }

    private get FirstProductElement() {
        return $(this.firstProductLocator);
    }

    private get FirstShopElement() {
        return $(this.firstShopLocator);
    }

    //

    async goToFirstProductCategory() {
        await this.FirstProductCategoryElement.waitForClickable();
        await this.FirstProductCategoryElement.click();
    }

    async goTofirstProductAsideCategory() {
        await this.FirstProductAsideCategoryElement.waitForClickable();
        await this.FirstProductAsideCategoryElement.click();
    }

    async goTofirstProductSubCategory() {
        await this.FirstProductSubCategoryElement.waitForClickable();
        await this.FirstProductSubCategoryElement.click();
    }

    async goTofirstProduct() {
        await this.FirstProductElement.waitForClickable();
        await this.FirstProductElement.click();
    }

    async addProductToCartFromFirstShop() {
        await this.FirstShopElement.waitForClickable();
        await this.FirstShopElement.click();
    }

}

export const productPage = new ProductPage();