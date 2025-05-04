import {urls} from "../constants/urls.ts";
import {IUsers} from "../models/IUser.ts";
import {IPosts} from "../models/IPost.ts";
import {IUserDummy} from "../models/IDummyUser.ts";
import {IDummyPost} from "../models/IDummyPost.ts";

export const userService = {
    getUsers: async (): Promise<IUsers[]> => {
        const allDummy:IUserDummy = await fetch(urls.users.allUsers)
            .then(res => res.json());
        return allDummy.users;
    }
}

export const postService = {
    getPosts: async (): Promise<IPosts[]> => {
        const allDummy:IDummyPost = await fetch(urls.posts.allPosts)
            .then(res => res.json());
        return allDummy.posts
    }
}


