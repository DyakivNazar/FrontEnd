import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,
            children:[

            ]
        }
    ]
)