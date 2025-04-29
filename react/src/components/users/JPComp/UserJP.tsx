import {FC} from 'react';
import {IUsersJP} from "../../../models/jsonplaceholder/users/IUsersJP.ts";

type UsersJPType = {
    user: IUsersJP
}

const UserJp: FC<UsersJPType> = ({user}) => {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    );
};

export default UserJp;