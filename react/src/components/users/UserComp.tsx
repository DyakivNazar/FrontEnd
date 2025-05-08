import {FC} from 'react';
import {IUser} from "../../models/IUsers.ts";

type UserCompType = {
    user:IUser;
}

const UserComp: FC<UserCompType> = ({user}) => {
    return (
        <div>
            {user.id}  {user.username}
        </div>
    );
};

export default UserComp;