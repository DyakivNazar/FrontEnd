import {FC} from 'react';
import {ICommentsDJ} from "../../../models/dummyjson/comments/ICommentsDJ.ts";

type CommentDJType = {
    comment: ICommentsDJ
}

const CommentDj:FC<CommentDJType> = ({comment:{id, body}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentDj