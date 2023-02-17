class LoginPage {

    private loginPageFormLocator: string = "//div[@class='auth-form']";

    //

    private get LoginPageFormElement() {
        return $(this.loginPageFormLocator);
    }

    //

    async getLoginPageFormVisibility() {
        this.LoginPageFormElement.waitForDisplayed();
        return (await this.LoginPageFormElement).isDisplayed();
    }

}

export const loginPage = new LoginPage();