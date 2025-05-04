import {useEffect, useState} from "react";
import {IUsers} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import UserComp from "./UserComp.tsx";

const UsersComp = () => {

    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {users.map((user) => <UserComp key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComp;