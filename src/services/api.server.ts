import {IPosts} from "../models/IPosts.ts";

const apiTodos = import.meta.env.VITE_API_URL + 'posts'

const getTodos = async ():Promise<IPosts[]> =>{
    return await fetch(apiTodos)
    .then(res => res.json())
}

export {getTodos}