import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUsers.ts";
import {apiService} from "../../services/api.service.ts";
import {IBaseDummy} from "../../models/IBaseDummy.ts";
import UserComp from "./UserComp.tsx";

const UsersComp = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg') || '1';
        apiService.getUsers<IBaseDummy & { users: IUser[] }>('?skip=', pg)
            .then(({users}) => setUsers(users))
    }, [query]);

    return (
        <div>
            {users.map((user) => <UserComp user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComp;