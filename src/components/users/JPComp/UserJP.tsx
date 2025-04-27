import {FC} from 'react';
import {IUsersJP} from "../../../models/jsonplaceholder/users/IUsersJP.ts";

type UsersJPType = {
    user: IUsersJP
}

const UserJp: FC<UsersJPType> = ({user}) => {
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserJp;