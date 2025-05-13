import {useEffect, useState} from "react";
import {loadAuthPosts, refresh} from "../../services/api.service.ts";
import {IPosts} from "../../models/IPosts.ts";
import PostComp from "./PostComp.tsx";

const PostsComp = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);
    // const [dontlogin, setDontlogin] = useState<string>("");

    useEffect(() => {
        loadAuthPosts().then(value => {
            setPosts(value)
        }).catch(reason => {
            console.log(reason);
            // if (reason.status === 401) {
            //     setDontlogin("Ви не зареєстровані");
            // }
            refresh()
                .then(() => loadAuthPosts())
                .then(value => setPosts(value))
        })

    }, []);
    // const messeg = dontlogin && <p style={{color: "red"}}>{dontlogin} <span style={{color: "black"}}>зареєструватися тут <Link to={'/login'}>login</Link></span></p>;
    return (
        <div>
            {/*{messeg}*/}
            {posts.map((post) => <PostComp key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComp;