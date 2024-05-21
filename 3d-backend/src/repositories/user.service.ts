import { User } from "../models";
import { AppDataSource } from "..";

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
    //   const userRepository = getRepository(User);
    const userRepository = (await AppDataSource).getRepository(User);
    return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const userRepository = (await AppDataSource).getRepository(User);
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload,
    });
};

export const getUser = async (userId: number): Promise<User | null> => {
    const userRepository = (await AppDataSource).getRepository(User);
    const user = await userRepository.findOneBy({ id: userId });
    if (!user) return null;
    return user;
};

export const updateUser = async (userId: number, updatedData: IUserPayload): Promise<User | null> => {
    const userRepository = (await AppDataSource).getRepository(User);
    await userRepository.update(userId, updatedData);
    return getUser(userId);
}

export const deleteUser = async (userId: number): Promise<boolean> => {
    const userRepository = (await AppDataSource).getRepository(User);
    const result = await userRepository.delete(userId);
    return result.affected === 1;
}