import {IComment} from "../models/IComment.ts";

const comments = import.meta.env.VITE_API_URL + 'comments';

const getComments = async ():Promise<IComment[]> => {
    return await fetch(comments)
        .then(res => res.json())
};

export { getComments };