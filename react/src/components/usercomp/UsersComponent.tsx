import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";
import {baseUrlJP} from "../../constants/urls.ts";

const UsersComponent = () => {

    console.log('test')

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(baseUrlJP + '/users').then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    return (
        <div> users component
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;