import {IPosts} from "./IPosts";

export type IPostsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    posts: IPosts[]

}
