import {IPostsJP} from "../../../models/jsonplaceholder/posts/IPostsJP.ts";
import {FC} from "react";

type PostJPType ={
    post:IPostsJP
}

const PostJp:FC<PostJPType> = ({post:{id, title}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    );
};

export default PostJp;