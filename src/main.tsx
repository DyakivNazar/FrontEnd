import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import UsersComponent from './components/UsersComponent.tsx';
import PostsComponent from "./components/PostsComponent.tsx";
import CommentsComponent from "./components/CommentsComponent.tsx";
import ProductsComponent from './components/ProductsComponent.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostsComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
