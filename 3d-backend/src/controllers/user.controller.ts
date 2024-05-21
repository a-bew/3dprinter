import { Get, Route, Tags, Post, Body, Path, Put, Delete } from "tsoa";
import { User } from "../models";
import { getUsers, createUser, IUserPayload, getUser, updateUser, deleteUser } from "../repositories/user.service";

@Route("users")
@Tags("User")
export class UserController {
    @Get("/")
    public async getUsers(): Promise<Array<User>> {
        return getUsers();
    }

    @Post("/")
    public async createUser(@Body() body: IUserPayload): Promise<User> {
        return createUser(body);
    }

    @Get("/:id")
    public async getUser(@Path() id: string): Promise<User | null> {
        return getUser(Number(id));
    }

    @Put('/:id')
    async updateTable(@Path() id: number, @Body() updatedData: IUserPayload): Promise<User | null> {
        return updateUser(id, updatedData);
    }

    @Delete('/:id')
    async deleteTable(@Path() id: number): Promise<boolean> {
        return deleteUser(id);
    }
}


