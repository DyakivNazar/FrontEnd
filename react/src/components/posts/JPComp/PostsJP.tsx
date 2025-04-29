import {useEffect, useState} from "react";
import {IPostsJP} from "../../../models/jsonplaceholder/posts/IPostsJP.ts";
import { postService } from "../../../services/api.service.ts";
import PostJP from "./PostJP.tsx";

const PostsJp = () => {
    const [posts, setPostsJP] = useState<IPostsJP[]>([]);

    useEffect(() => {
        postService.getPostJP().then(value => setPostsJP(value))
    }, []);
    return (
        <div>
            {posts.map((post) => <PostJP key={post.id} post={post} />)}
        </div>
    );
};

export default PostsJp;