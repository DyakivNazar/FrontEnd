import {IPosts} from "./IPost.ts";

export interface IPostDummy {
    posts: IPosts[];
    total: number;
    skip: number;
    limit: number;
}