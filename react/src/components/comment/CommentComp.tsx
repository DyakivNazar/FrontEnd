import {IComment} from "../../models/IComment.ts";
import {FC} from "react";

type CommentCompType = {
    comment: IComment;
}

export const CommentComp: FC<CommentCompType> = ({comment: {id, name, body}}) => {
    return (
        <div className={'post'}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{body}</p>
        </div>
    );
};