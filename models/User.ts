import {faker} from "@faker-js/faker";

export default class User {
    private readonly firstName : string
    private readonly lastName : string
    private readonly email : string
    private readonly password : string
    private accessToken : string
    private userID : string

    constructor() {
        this.firstName = faker.person.firstName()
        this.lastName = faker.person.lastName()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }

    getFirstName() : string {
        return this.firstName
    }

    getLastName() : string {
        return this.lastName
    }

    getEmail() : string {
        return this.email
    }

    getPassword() : string {
        return this.password
    }

    setAccessToken(accessToken : string) {
        this.accessToken = accessToken
    }

    setUserId(userID : string) {
        this.userID = userID
    }

    getAccessToken() : string {
        return this.accessToken
    }

    getUserId() : string {
        return this.userID
    }
}