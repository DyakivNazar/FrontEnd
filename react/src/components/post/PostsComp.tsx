import {useFetch} from "../../hooks/UseFetch.ts";
import {baseUrlJP} from "../../constants/urls.ts";
import {IPost} from "../../models/IPost.ts";
import PostComp from "./PostComp.tsx";

export const PostsComp = () => {

    const posts = useFetch<IPost[]>(baseUrlJP + '/posts')
    return (
        <div>
            {
                posts?.map((post) => <PostComp post={post}/>)
            }
        </div>
    );
};