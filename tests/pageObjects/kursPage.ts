class KursPage {

    // В дни, когда нет торгов на бирже, меняется локатор, новый должен работать во все дни.

    private currencyUsdRateLocator: string = "(//p[contains(@class, 'delta')]/preceding-sibling::p/b)[1]";
    private currencyInputFieldLocator: string = "//input[@id='amount-in']";
    private convertedCurrencyLocator: string = "//b[@class='js-cur-result']";
    private defaultCurrencyFromLocator: string = "#currency-in>option";
    private defaultCurrencyToLocator: string = "#currency-out>option";

    //

    private get UsdRateElement() {
        return $(this.currencyUsdRateLocator);
    }

    private get CurrencyInputFieldElement() {
        return $(this.currencyInputFieldLocator);
    }

    private get ConvertedCurrencyElement() {
        return $(this.convertedCurrencyLocator);
    }

    private get DefaultCurrencyFromElement() {
        return $(this.defaultCurrencyFromLocator);
    }

    private get DefaultCurrencyToElement() {
        return $(this.defaultCurrencyToLocator);
    }

    //

    async getUsdRateValue() {
        await this.UsdRateElement.waitForDisplayed();
        return +(this.UsdRateElement.getText());
    }

    // Вообще по другому работает. SetValue даже само чистит поле.

    async setNeededCurrencyAmmount(currencyAmmount: number) {
        await this.CurrencyInputFieldElement.waitForDisplayed();
        await this.CurrencyInputFieldElement.setValue(currencyAmmount);
    }

    async getConvertedCurrencyAmmount() {
        await this.ConvertedCurrencyElement.waitForDisplayed();
        return +(await this.ConvertedCurrencyElement.getText());
    }

    async getDefaultCurrencyFromValue() {
        await this.DefaultCurrencyFromElement.waitForDisplayed();
        return (await this.DefaultCurrencyFromElement.getText()).trim();
    }

    async getDefaultCurrencyToValue() {
        await this.DefaultCurrencyToElement.waitForDisplayed();
        return (await this.DefaultCurrencyToElement.getText()).trim();
    }

}

export const kursPage = new KursPage();