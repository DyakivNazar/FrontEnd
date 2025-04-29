import {useEffect, useState} from "react";
import {IUsersJP} from "../../../models/jsonplaceholder/users/IUsersJP.ts";
import {userService} from "../../../services/api.service.ts";
import UserJP from "./UserJP.tsx";

const UsersJp = () => {
    const [usersJP, setUsersJP] = useState<IUsersJP[]>([])

    useEffect(() => {
        userService.getUsersJP().then(value => {
            setUsersJP(value)
        })
    }, []);
    return (
        <div>
            {usersJP.map((user) => <UserJP key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersJp;