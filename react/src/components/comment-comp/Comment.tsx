import {IComment} from "../../models/IComment.ts";
import {FC} from "react";
import './Comment.css'

type CommentPropsType = {
    comment: IComment
}

export const Comment:FC<CommentPropsType> = ({comment:{name, email, body}}) => {
    return (
        <div className={'comment-wrap'}>
            <h2>{email}</h2>
            <h3>{name}</h3>
            <p>{body}</p>

        </div>
    );
};