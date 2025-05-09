import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import {FormCarComp} from "../components/form-car/FormCarComp.tsx";

export const router = createBrowserRouter(
    [
        {
            path:'/', element:<MainLayout/>,
        },
        {path:'cars', element:<CarsPage/>},
        {path:'cars/form-car', element:<FormCarComp/>}
    ]
)