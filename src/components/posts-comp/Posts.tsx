import {useEffect, useState} from "react";
import {IPosts} from "../../models/IPost.ts";
import {getPosts} from "../../services/api.service.ts";
import {Post} from "../post-comp/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
        getPosts().then((value) => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};