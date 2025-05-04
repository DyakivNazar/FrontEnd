import {IUsers} from "./IUser.ts";

export interface IUserDummy {
    users: IUsers[];
    total: number;
    skip: number;
    limit: number;
}