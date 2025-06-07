import User from "../models/User";
import {APIRequestContext} from "@playwright/test";

export default class UserApi {
    async signup(request: APIRequestContext, user: User){
        return await request.post("/api/v1/users/register", {
            data: {
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
                email: user.getEmail(),
                password: user.getPassword()
            }
        });
    }
}