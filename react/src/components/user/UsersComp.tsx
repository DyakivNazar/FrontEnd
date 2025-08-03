import {useFetch} from "../../hooks/UseFetch.ts";
import {baseUrlJP} from "../../constants/urls.ts";
import {IUser} from "../../models/IUser.ts";
import UserComp from "./UserComp.tsx";

export const UsersComp = () => {

    const users = useFetch<IUser[]>(baseUrlJP +'/users');
    return (
        <div>
            {
                users?.map((user) => <UserComp user={user}/> )
            }
        </div>
    );
};