import {useEffect, useState} from "react";
import {ICommentsDJ} from "../../../models/dummyjson/comments/ICommentsDJ.ts";
import {commentService} from "../../../services/api.service.ts";
import CommentDJ from "./CommentDJ.tsx";

const CommentsDj = () => {
    const [commentDJ, setCommentDJ] = useState<ICommentsDJ[]>([])
    useEffect(() => {
        commentService.getCommentsDJ().then(value => setCommentDJ(value))
    }, []);
    return (
        <div>
            {commentDJ.map((comment) => <CommentDJ key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsDj;