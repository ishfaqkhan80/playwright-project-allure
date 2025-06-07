import {APIRequestContext, BrowserContext, Page} from "@playwright/test";
import User from "../models/User";
import UserApi from "../apis/UserApi";
import config from '../playwright.config'

export default class SignupPage {
    async load(page: Page) {
        await page.goto("/signup")
    }

    private getFirstnameInput() {
        return `[data-testid=first-name]`
    }

    private getLastNameInput() {
        return `[data-testid=last-name]`
    }

    private getEmailInput() {
        return `[data-testid=email]`
    }

    private getPasswordInput() {
        return `[data-testid=password]`
    }

    private getConfirmPasswordInput() {
        return `[data-testid=confirm-password]`
    }

    private getSubmitButton() {
        return `[data-testid=submit]`
    }

    async signup(page: Page, user: User) {
        await page.fill(this.getFirstnameInput(), user.getFirstName())
        await page.fill(this.getLastNameInput(), user.getLastName())
        await page.fill(this.getEmailInput(), user.getEmail())
        await page.fill(this.getPasswordInput(), user.getPassword())
        await page.fill(this.getConfirmPasswordInput(), user.getPassword())
        await page.click(this.getSubmitButton())
    }

    async signupUsingAPI(request: APIRequestContext, user: User, context: BrowserContext){
        const response = await new UserApi().signup(request, user);

        const responseBody = await response.json()
        const access_token = responseBody["access_token"]
        const userID = responseBody["userID"]
        const firstName = responseBody["firstName"]

        user.setAccessToken(access_token)
        user.setUserId(userID)

        const cookies = [
            {
                name: "access_token",
                value: access_token,
                url: config.use?.baseURL
            },
            {
                name: "firstName",
                value: firstName,
                url: config.use?.baseURL
            },
            {
                name: "userID",
                value: userID,
                url: config.use?.baseURL
            }
        ]

        await context.addCookies(cookies)
    }
}