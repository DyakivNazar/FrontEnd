import {useEffect, useState} from "react";
import {IPosts} from "../../models/IPosts.ts";
import {getTodos} from "../../services/api.server.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        getTodos().then(value => setPosts(value))
    }, []);

    return (
        <>
            {
                posts.map((post) => <Post key={post.id} post={post} />)
            }
        </>
    );
};