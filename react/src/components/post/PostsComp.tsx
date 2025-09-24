import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlise.ts";
import {PostCopm} from "./PostCopm.tsx";

export const PostsComp = () => {

    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <>
            {posts.map((post) => <PostCopm key={post.id} post={post}/>)}
        </>
    );
};