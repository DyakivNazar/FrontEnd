import {IPostsDJ} from "../../../models/dummyjson/posts/IPostsDJ.ts";
import {FC} from "react";

type PostDJType = {
    post: IPostsDJ
}

const PostDj:FC<PostDJType> = ({post:{id, title}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    );
};

export default PostDj;