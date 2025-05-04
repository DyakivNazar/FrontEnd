import {useEffect, useState} from "react";
import {IPosts} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import PostComp from "./PostComp.tsx";

const PostsComp = () => {

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        postService.getPosts().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {posts.map((post) => <PostComp key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComp;