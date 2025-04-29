import {IPostsDJ} from "./IPostsDJ.ts";

export interface IDummyPosts {
    posts: IPostsDJ[];
    total: number;
    skip: number;
    limit: number;
}