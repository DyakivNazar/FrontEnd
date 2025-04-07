import {useEffect, useState} from "react";
import {IComment} from "../../models/IComment.ts";
import {getComments} from "../../services/api.service.ts";
import {Comment} from "../comment-comp/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then(value => {setComments(value)});
    },[]);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
            
        </div>
    );
};