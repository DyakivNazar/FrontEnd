import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;