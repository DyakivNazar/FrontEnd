import {FC} from "react";
import {IUsers} from "../../models/IUser.ts";

type UserType = {
    user: IUsers
}

const UserComp:FC<UserType> = ({user}) => {
    return (
        <div>
            {user.username}
        </div>
    );
};

export default UserComp;