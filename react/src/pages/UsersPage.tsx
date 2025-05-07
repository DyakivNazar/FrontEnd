import UsersComp from "../components/user/UsersComp.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <UsersComp/>
            <hr/>
            <Outlet/>
        </div>
    );
};