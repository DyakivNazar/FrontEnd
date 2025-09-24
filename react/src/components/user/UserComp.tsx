import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import './user.css'

type UserCompType = {
    user: IUser;
}

export const UserComp: FC<UserCompType> = ({user: {id, name, email, username}}) => {
    return (
        <div className={'user'}>
            <p>{id} Name: {name}</p>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};