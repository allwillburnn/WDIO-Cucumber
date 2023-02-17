import { Given, When, Then } from '@wdio/cucumber-framework';
import { generalPage } from "../pageObjects/generalElements";
import { tasksPage } from "../pageObjects/tasksPage";

// Чат работает до определенного времени (Примерно в 21:30 перестает появляться, также на выходных он тоже недоступен)

let chatStatus: boolean;

Given("I visit tasks page", async () => {
    await generalPage.goToTasks();
})

Then("I check chat for visibility", async () => {
    chatStatus = await tasksPage.getChatStatus();
})

When("I can see chat with manager", async () => {
    expect(chatStatus).toEqual(true);
})