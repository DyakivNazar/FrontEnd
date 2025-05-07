import {Outlet} from "react-router-dom";
// import UsersComp from "../components/user/UsersComp.tsx";

const MainLayout = () => {
    return (
        <div>
            {/*<UsersComp/>*/}
            {/*<hr/>*/}
            <Outlet/>
        </div>
    );
};

export default MainLayout;