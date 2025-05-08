import {urls} from "../constants/urls.ts";

export const apiService={
    getUsers: async <T, >(value:string, page: string):Promise<T> =>{
        const limit = 30;
        const skip = limit * (+page) - limit;
        return await fetch(`${urls.users.allUsers}${value}${skip}`).then(res=>res.json());
    }
}

