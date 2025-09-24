import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlise.ts";
import {postSliceActions} from "../../redux/slices/postSlise.ts";
import {commentSliceActions} from "../../redux/slices/commentSlise.ts";
import {Link} from "react-router-dom";
import './complex.css'

export const ComplexComp = () => {

    const {userSlice: {users}, postSlice:{posts}, commentSlice:{comments}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (users.length) dispatch(userSliceActions.loadUsers());
        if (posts.length) dispatch(postSliceActions.loadPosts());
        if (comments.length) dispatch(commentSliceActions.loadComments());
    }, []);

    const missing = [];
    if (!users.length) missing.push("users");
    if (!posts.length) missing.push("posts");
    if (!comments.length) missing.push("comments");

    if (missing.length) {
        return <div className={'error'}>
                    <p>No {missing.join(" and ")} found.</p>
                    <ul>
                        Go to
                        {missing.map((item) =>(
                            <li key={item}>
                                <Link className={'white-link'} to={`/${item}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>;
    }


    return (
        <div>
            <h1>Complex Data</h1>
            {users.map(user => (
                <div className={'div-user'} key={user.id}>
                    <h2>{user.name}</h2>

                    {posts.filter(post => post.userId === user.id).map(post => (
                        <div className={'info'} key={post.id}>
                            <h2>Post</h2>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>

                            <div>
                                <h3>Comments to post</h3>
                                {comments.filter(c => c.postId === post.id).map(c => (
                                    <p key={c.id}>
                                        <b>{c.email}</b>: {c.body}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};