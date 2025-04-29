import {useEffect, useState} from "react";
import {userService} from "../../../services/api.service.ts";
import {IUsersDJ} from "../../../models/dummyjson/users/IUserDJ.ts";
import UserDJ from "./UserDJ.tsx";

const UsersDj = () => {
    const [usersDJ, setUsersDJ] = useState<IUsersDJ[]>([])

    useEffect(() => {
        userService.getUsersDJ().then(value => {
            setUsersDJ(value)
        })
    })
    return (
        <div>
            {usersDJ.map((user) => <UserDJ key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersDj;