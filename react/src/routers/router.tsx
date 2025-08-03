import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UserPage from "../page/UserPage.tsx";
import {PostPage} from "../page/PostPage.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,
            children:[
                {path: 'users', element:<UserPage/>},
                {path: 'posts', element:<PostPage/>},

            ]
        }
    ]
)