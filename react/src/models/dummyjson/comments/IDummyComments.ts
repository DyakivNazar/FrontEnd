import {ICommentsDJ} from "./ICommentsDJ.ts";

export interface IDummyComments {
    comments: ICommentsDJ[];
    total: number;
    skip: number;
    limit: number;
}