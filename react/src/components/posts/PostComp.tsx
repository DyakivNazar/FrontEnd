import {FC} from 'react';
import {IPosts} from "../../models/IPosts.ts";
import './post.css'

type PostCompType = {
    post: IPosts
}

const PostComp: FC<PostCompType> = ({post}) => {
    return (
        <div>
            <p></p>
            <div className={'post'}>
                <p className={'title'}>Назва посту {post.title}</p>
                <p>{post.body}</p>
                <p>Переглядів {post.views}</p>
            </div>
        </div>

    );
};

export default PostComp;