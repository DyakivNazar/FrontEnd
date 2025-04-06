import {IPosts} from "../../models/IPosts.ts";
import {FC} from "react";
import './post.css'

type PostType = { post: IPosts };
export const Post:FC<PostType> = ({post:{id, title, body}}) => {
    return (
        <div className={'wrap-post'}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};