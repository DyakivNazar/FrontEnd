import { IUsersDJ } from "../models/dummyjson/users/IUserDJ.ts"
import { IUsersJP } from "../models/jsonplaceholder/users/IUsersJP.ts"
import {IUserDummy} from "../models/dummyjson/users/IUserDummy.ts";
import {urls} from "../constants/urls.ts";
import {IPostsJP} from "../models/jsonplaceholder/posts/IPostsJP.ts";
import {IDummyPosts} from "../models/dummyjson/posts/IDummyPosts.ts";
import {ICommentsJP} from "../models/jsonplaceholder/comments/ICommentsJP.ts";
import {ICommentsDJ} from "../models/dummyjson/comments/ICommentsDJ.ts";
import {IDummyComments} from "../models/dummyjson/comments/IDummyComments.ts";
import { IPostsDJ } from "../models/dummyjson/posts/IPostsDJ.ts";


export const userService = {
    getUsersJP:  async ():Promise<IUsersJP[]> =>{
        return await fetch(urls.users.allUsersJP)
            .then(res=>res.json())
    },
    getUsersDJ: async ():Promise<IUsersDJ[]> =>{
        const fullDate:IUserDummy =  await fetch(urls.users.allUsersDJ)
            .then(res=>res.json());
        return fullDate.users
    }
}

export const postService = {
    getPostJP:async ():Promise<IPostsJP[]> =>{
        return await fetch(urls.posts.allPostsJP)
            .then(res=>res.json())
    },
    getPostsDJ: async ():Promise<IPostsDJ[]> =>{
        const fullDate:IDummyPosts =  await fetch(urls.posts.allPostsDJ)
            .then(res=>res.json());
        return fullDate.posts
    }
}

export const commentService = {
    getCommentsJP:async ():Promise<ICommentsJP[]> =>{
        return await fetch(urls.comments.allCommentsJP)
            .then(res=>res.json())
    },
    getCommentsDJ: async ():Promise<ICommentsDJ[]> =>{
        const fullDate:IDummyComments =  await fetch(urls.comments.allCommentsDJ)
            .then(res=>res.json());
        return fullDate.comments
    }
}
