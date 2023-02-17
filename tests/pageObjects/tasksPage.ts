class TasksPage {

    // Iframe... По логике текст точно в нем не должен меняться.

    private chatLocator: string = "//jdiv[text()='Напишите консультанту Onliner']";
    private createTaskLocator: string = "//a[@ng-if='navigation.isCreateTaskLinkVisible()']";

    //

    private get ChatElement() {
        return $(this.chatLocator);
    }

    private get CreateTaskElement() {
        return $(this.createTaskLocator);
    }

    //

    async getChatStatus() {
        await this.ChatElement.waitForDisplayed();
        return (await this.ChatElement).isDisplayed();
    }

    async createTask() {
        await this.CreateTaskElement.waitForClickable();
        await this.CreateTaskElement.click();
    }

}

export const tasksPage = new TasksPage();