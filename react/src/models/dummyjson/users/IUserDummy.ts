import { IUsersDJ } from "./IUserDJ.ts";

export interface IUserDummy {
    users: IUsersDJ[];
    total: number;
    skip: number;
    limit: number;
}