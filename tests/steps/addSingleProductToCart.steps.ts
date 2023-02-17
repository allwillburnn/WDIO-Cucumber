import { Given, When, Then } from '@wdio/cucumber-framework';
import { generalPage } from "../pageObjects/generalElements";
import { productPage } from "../pageObjects/productPage";

let counterValue: number;

Given("I visit catalog page", async () => {
    await generalPage.goToCatalog();
})

When("I open first product category", async () => {
    await productPage.goToFirstProductCategory();
})

When("I open first aside product category", async () => {
    await productPage.goTofirstProductAsideCategory();
})

When("I open first product subcategory", async () => {
    await productPage.goTofirstProductSubCategory();
})

When("I open first product page", async () => {
    await productPage.goTofirstProduct();
})

When("I add this product to cart from first shop", async () => {
    await productPage.addProductToCartFromFirstShop();
    counterValue = await generalPage.getCartCounterNotLoggedValue();
})

Then("I can see valid cart counter appeared", async () => {
    expect(counterValue).toEqual(1);
})