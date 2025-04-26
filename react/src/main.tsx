import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,
            children:[

            ]
        }
    ]
)
createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
