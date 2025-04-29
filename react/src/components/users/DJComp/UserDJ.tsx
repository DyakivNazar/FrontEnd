import {FC} from "react";
import {IUsersDJ} from "../../../models/dummyjson/users/IUserDJ.ts";

type UserDJType = {
    user:IUsersDJ
}

const UserDj:FC<UserDJType> = ({user:{id, username}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{username}</p>
        </div>
    );
};

export default UserDj;