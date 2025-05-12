import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

// Правила переходу по сторінках
export const routes = createBrowserRouter([
    //Хостова(http://localhost:port/) сторінка MainLayout та її під сторінки
    {
        path: '/', element: <MainLayout/>, children: [
            //Головна сторінка
            {index: true, element: <HomePage/>},
            //Хост/login сторінка
            {path: 'login', element: <LoginPage/>},
            //Хост/login/resources сторінка
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);
