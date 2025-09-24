import {IPost} from "../../models/IPost.ts";
import {FC} from "react";
import './post.css'

type PostCopmType = {
    post: IPost
}

export const PostCopm: FC<PostCopmType> = ({post: {id, body, title}}) => {

    return (
        <div className={'post'}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};