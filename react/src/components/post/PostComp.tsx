import {IPosts} from "../../models/IPost.ts";
import {FC} from "react";

type PostType = {
    post:IPosts
}
const PostComp:FC<PostType> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComp;