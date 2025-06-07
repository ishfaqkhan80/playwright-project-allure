import {APIRequestContext} from "@playwright/test";
import User from "../models/User";

export default class TaskApi {
    async addTodo(request: APIRequestContext, user: User) {
        return await request.post("/api/v1/tasks", {
            data: {
                isCompleted: false,
                item: "task to be deleted"
            },
            headers: {
                Authorization: `Bearer ${user.getAccessToken()}`
            }
        })
    }
}