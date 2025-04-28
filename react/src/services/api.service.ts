import { IUsersDJ } from "../models/dummyjson/users/IUserDJ.ts"
import { IUsersJP } from "../models/jsonplaceholder/users/IUsersJP.ts"
import {IUserDummy} from "../models/dummyjson/users/IUserDummy.ts";

const userJP = import.meta.env.VITE_API_URL_JP + '/users'
const userDJ = import.meta.env.VITE_API_URL_DJ + '/users'

export const getUsersJP = async ():Promise<IUsersJP[]> =>{
    return await fetch(userJP)
        .then(res=>res.json())
}

export const getUsersDJ = async ():Promise<IUsersDJ[]> =>{
    const fullDate:IUserDummy =  await fetch(userDJ)
        .then(res=>res.json());
    return fullDate.users
}