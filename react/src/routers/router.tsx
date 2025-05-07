import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CartPage from "../pages/CartPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,children:[
                {path: 'users', element: <UsersPage/>, children:[
                        {path:':userId/cart', element:<CartPage/>}
                    ]
                },
            ]
        }
    ]
)