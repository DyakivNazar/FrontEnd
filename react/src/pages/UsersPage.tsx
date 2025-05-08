import PaginationComp from "../components/pagination/PaginationComp.tsx";
import UsersComp from "../components/users/UsersComp.tsx";

const UsersPage = () => {
    return (
        <div>
            <UsersComp/>
            <PaginationComp/>
        </div>
    );
};

export default UsersPage;