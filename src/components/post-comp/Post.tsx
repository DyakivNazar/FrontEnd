import {IPosts} from "../../models/IPost.ts";
import {FC} from "react";
import './Post.css'

type PostType = {
    post: IPosts
}

export const Post:FC<PostType> = ({post:{title, body, tags, reactions, views}}) => {
    return (
        <div className={'post-wrapper'}>
            <h2>{title}</h2>
            <p className={'body'}>{body}</p>
            <ul>Tags:{tags.map((tags, index)=> <li key={index}>{tags}</li>)}</ul>
            <ul>reactions:
                <li>Лайки: {reactions.likes}</li>
                <li>Дізлайки: {reactions.dislikes}</li>
            </ul>
            <p>Переглядів: {views}</p>

        </div>
    );
};