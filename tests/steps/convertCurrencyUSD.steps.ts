import { Given, When, Then } from '@wdio/cucumber-framework';
import { generalPage } from "../pageObjects/generalElements";
import { kursPage } from "../pageObjects/kursPage";

const currencyAmmount: number = Math.floor(Math.random() * (500) + 1);

Given("I visit kurs page", async () => {
    await generalPage.goToKurs();
})

Then("I enter the amount of interest to me in the input field", async () => {
    await kursPage.setNeededCurrencyAmmount(currencyAmmount);
})

When("I see correct converted ammount in USD", async () => {
    const currencyUsdRate: number = await kursPage.getUsdRateValue();
    expect(await kursPage.getConvertedCurrencyAmmount()).toEqual(currencyAmmount * currencyUsdRate);
})