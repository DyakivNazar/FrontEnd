import {useEffect, useState} from "react";
import {ICommentsJP} from "../../../models/jsonplaceholder/comments/ICommentsJP.ts";
import {commentService} from "../../../services/api.service.ts";
import CommentJP from "./CommentJP.tsx";

const CommentsJp = () => {
    const [commentsJP, setCommentsJP] = useState<ICommentsJP[]>([])

    useEffect(() => {
        commentService.getCommentsJP().then(value => setCommentsJP(value))
    }, []);
    return (
        <div>
            {commentsJP.map((comment) => <CommentJP key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsJp;