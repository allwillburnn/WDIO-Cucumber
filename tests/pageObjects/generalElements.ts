class GeneralPage {

    // Залогинен - //a[@class='b-top-profile__cart']/span
    // Не вошел в аккаунт - //a[@class='auth-bar__item auth-bar__item--cart']/div
    // Старый xpath на курс - //span[@class='_u js-currency-amount']

    // Я в шоке немного, как будто он не может найти в половине случаев курс по xpath. По css локатору все отлично.

    private catalogLocator: string = "//a[contains(@class, 'b-main-navigation__link')]/span[text()='Каталог']";
    private tasksLocator: string = "//a[contains(@class, 'b-main-navigation__link')]/span[text()='Услуги']";
    private kursLocator: string = "._u.js-currency-amount";
    private cartCounterNotLoggedLocator: string = "//a[@class='auth-bar__item auth-bar__item--cart']/div";

    //

    private get CatalogElement() {
        return $(this.catalogLocator);
    }

    private get TasksElement() {
        return $(this.tasksLocator);
    }

    private get CartCounterNotLoggedElement() {
        return $(this.cartCounterNotLoggedLocator);
    }

    private get KursElement() {
        return $(this.kursLocator);
    }

    //

    async goToCatalog() {
        await this.CatalogElement.waitForClickable();
        await this.CatalogElement.click();
    }

    async goToTasks() {
        await this.TasksElement.waitForClickable();
        await this.TasksElement.click();
    }

    async getCartCounterNotLoggedValue() {
        await this.CartCounterNotLoggedElement.waitForExist();
        return +(await this.CartCounterNotLoggedElement.getText()).trim();
    }

    async goToKurs() {
        await this.KursElement.waitForClickable();
        await this.KursElement.click();
    }

}

export const generalPage = new GeneralPage();