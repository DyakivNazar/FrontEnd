import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {
        /*Колбек в якому за допомогою асинхроної функції loadAuthProducts завантажуємо продукти і виводимо в консоль
          якщо в нас робиться помилка, ми за допомогою refresh оновлюємо токен, та виводимо продукт в консоль*/
        loadAuthProducts().then(products => {
            console.log(products)
        }).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};
