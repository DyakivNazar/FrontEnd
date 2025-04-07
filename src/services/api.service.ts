import {IPosts} from "../models/IPost.ts";
import {IPostDummy} from "../models/PostDummy.ts";

const posts = import.meta.env.VITE_API_URL + 'posts';

const getPosts = async ():Promise<IPosts[]> => {
    const fullData:IPostDummy = await fetch(posts)
        .then((res) => res.json());
    return fullData.posts;
}

export {getPosts};
