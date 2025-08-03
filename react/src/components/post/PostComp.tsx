import {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostCompType = { post: IPost }

const PostComp: FC<PostCompType> = ({post}: PostCompType) => {
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComp;