import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routers/router.tsx";


createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
