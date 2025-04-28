import {ITodos} from "../models/ITodos.ts";

export const getTodos = async (): Promise<ITodos[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json())
}