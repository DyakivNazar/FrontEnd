import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

interface UserCompon {
    user:IUser;
}

const UserComp = ({user}: UserCompon) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate("/users/" + user.id + "/carts");
    }
    return (
        <li>
            {user.username} <button className={"border-2"} onClick={onButtonClick}>info catrs</button>
        </li>
    );
};

export default UserComp;