import {IPosts} from "./IPost.ts";

export interface IDummyPost {
    posts: IPosts[];
    total: number;
    skip: number;
    limit: number;
}