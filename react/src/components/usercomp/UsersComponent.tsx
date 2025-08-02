import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import {baseUrlJP} from "../../constants/urls.ts";

const UsersComponent = () => {

    console.log('test')

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(baseUrlJP + '/users').then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    const foo = useCallback(() => {
        console.log('foo')
    }, []) // useCallback ця функція, хешує об'єкт або функцію, для того щоб зайвий раз не рірендерився UserComponent

    const arr:number[] = useMemo(() => {
        return [192, 123, 523, 56];
    }, []); // useMemo ця функція оптимізує масив, та повертає масив чисел

    return (
        <div> users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;