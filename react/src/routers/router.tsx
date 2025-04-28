import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../Pages/UsersPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import UsersJP from "../components/users/UsersJP.tsx";
import UsersDJ from "../components/users/UsersDJ.tsx";
import PostsJP from "../components/posts/PostsJP.tsx";
import PostsDJ from "../components/posts/PostsDJ.tsx";
import CommentsJP from "../components/comments/CommentsJP.tsx";

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
                    ]},
            ]
        }
    ]
)