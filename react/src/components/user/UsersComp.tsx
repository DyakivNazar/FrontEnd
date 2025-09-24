import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlise.ts";
import {UserComp} from "./UserComp.tsx";

export const UsersComp = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <>
            {users.map((user) => <UserComp key={user.id} user={user} />)}
        </>
    );
};