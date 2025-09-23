import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPages/UsersPage.tsx";
import {PostsPage} from "../pages/postsPages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPages/CommentsPage.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,
            children:[
                {path: 'users', element:<UsersPage/>},
                {path: 'posts', element:<PostsPage/>},
                {path: 'comments', element:<CommentsPage/>}
            ]
        }
    ]
)