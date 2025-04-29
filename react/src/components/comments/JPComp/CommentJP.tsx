import {FC} from 'react';
import {ICommentsJP} from "../../../models/jsonplaceholder/comments/ICommentsJP.ts";

type CommentJPType = {
    comment: ICommentsJP
}

const CommentJp:FC<CommentJPType> = ({comment:{id, name}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
        </div>
    );
};

export default CommentJp;