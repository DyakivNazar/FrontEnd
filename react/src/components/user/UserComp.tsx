import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserCompType = { user: IUser }

const UserComp: FC<UserCompType> = ({user}: UserCompType) => {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.username}</p>
        </div>
    );
};

export default UserComp;