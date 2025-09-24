import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlise.ts";
import {CommentComp} from "./CommentComp.tsx";

export const CommentsComp = () => {

    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);

    return (
        <>
            {comments.map((comment) => <CommentComp key={comment.id} comment={comment}/>)}
        </>
    );
};