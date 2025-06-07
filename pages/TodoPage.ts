import {Page} from "@playwright/test";

export default class TodoPage {
    private get welcomeMessage() {
        return `[data-testid=welcome]`
    }

    private get noTodosMessage() {
        return `[data-testid=no-todos]`
    }

    private get deleteIcon(){
        return "[data-testid=delete]"
    }

    private get todoItem(){
        return `[data-testid=todo-item]`
    }

    async load(page: Page){
        await page.goto("/todo")
    }

    getWelcomeMessageElement(page: Page)     {
        return page.locator(this.welcomeMessage)
    }

    async deleteTodo(page: Page){
        await page.click(this.deleteIcon)
    }

    async getNoTodosMessageElement(page: Page){
        return page.locator(this.noTodosMessage);
    }

    async getTodoItemElement(page: Page){
        return page.locator(this.todoItem)
    }
}