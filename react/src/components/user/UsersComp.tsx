import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.ts";
import {IBaseDummy} from "../../models/IBaseDummy.ts";
import UserComp from "./UserComp.tsx";

const UsersComp = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAll<IBaseDummy & {users: IUser[]}>('/users')
            .then(({users}) => setUsers(users))
    }, []);
    return (
        <ul>
            {
                users.map((user:IUser) => <UserComp key={user.id} user={user}/>)
            }
        </ul>
    );
};

export default UsersComp;