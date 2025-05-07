import {IUser} from "../../models/IUser.ts";
import {Link} from "react-router-dom";

interface UserCompon {
    user:IUser;
}

const UserComp = ({user}: UserCompon) => {
    return (
        <li>
            <Link to={user.id + '/cart'} state={user}>{user.username}</Link>
        </li>
    );
};

export default UserComp;