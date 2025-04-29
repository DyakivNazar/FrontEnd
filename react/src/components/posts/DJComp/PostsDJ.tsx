import {useEffect, useState} from "react";
import {IPostsDJ} from "../../../models/dummyjson/posts/IPostsDJ.ts";
import {postService} from "../../../services/api.service.ts";
import PostDJ from "./PostDJ.tsx";

const PostsDj = () => {
        const [postsDJ, setPostsDJ] = useState<IPostsDJ[]>([])

        useEffect(() => {
                postService.getPostsDJ().then(value => setPostsDJ(value))
            }, []);
        return (
            <div>
                {postsDJ.map((post) => <PostDJ key={post.id} post={post}/>)}
            </div>
        );
    }
;

export default PostsDj;