import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import UsersJP from "../components/users/JPComp/UsersJP.tsx";
import UsersDJ from "../components/users/DJComp/UsersDJ.tsx";
import PostsJP from "../components/posts/JPComp/PostsJP.tsx";
import PostsDJ from "../components/posts/DJComp/PostsDJ.tsx";
import CommentsJP from "../components/comments/JPComp/CommentsJP.tsx";
import CommentsDJ from "../components/comments/DJComp/CommentsDJ.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,
            children:[
                {path:'users', element:<UsersPage/>,
                    children:[
                        {path:'jsonplaceholder', element:<UsersJP/>},
                        {path:'dummyjson', element:<UsersDJ/>},
                    ]},
                {path:'posts', element:<PostsPage/>,
                    children:[
                        {path:'jsonplaceholder', element:<PostsJP/>},
                        {path:'dummyjson', element:<PostsDJ/>},
                    ]},
                {path:'comments', element:<CommentsPage/>,
                    children:[
                        {path:'jsonplaceholder', element:<CommentsJP/>},
                        {path:'dummyjson', element:<CommentsDJ/>},
                    ]},
            ]
        }
    ]
)