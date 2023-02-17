import { Given, When, Then } from '@wdio/cucumber-framework';
import { generalPage } from "../pageObjects/generalElements";
import { kursPage } from "../pageObjects/kursPage";

let defaultCurrencyFrom: string;
let defaultCurrencyTo: string;

Then("I check default currency values from & to", async () => {
    defaultCurrencyFrom = await kursPage.getDefaultCurrencyFromValue();
    defaultCurrencyTo = await kursPage.getDefaultCurrencyToValue();
})

When("Default values from is USD & BYN", async () => {
    expect(defaultCurrencyFrom).toEqual("USD");
    expect(defaultCurrencyTo).toEqual("BYN");
})