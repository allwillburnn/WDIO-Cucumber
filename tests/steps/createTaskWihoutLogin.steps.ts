import { Given, When, Then } from '@wdio/cucumber-framework';
import { generalPage } from "../pageObjects/generalElements";
import { tasksPage } from "../pageObjects/tasksPage";
import { loginPage } from "../pageObjects/loginPage";

Then("I create task", async () => {
    await tasksPage.createTask();
})

When("I will be redirected to login page", async () => {
    expect(await loginPage.getLoginPageFormVisibility()).toEqual(true);
})