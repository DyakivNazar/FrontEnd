import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    useEffect(() => {
        /*Колбек в якому за допомогою асинхроної функції login логуємо користувача з такими даними username, password, expiresInMins*/
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            login Page
        </>
    );
};
