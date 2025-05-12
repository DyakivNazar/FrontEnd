import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    /*Власний тип LoginData для
        Ім’я користувача - текстовий рядок
        Пароль - текстовий рядок
        Час, на який дійсний логін (у хвилинах) - числове значення
    */
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({
    /*Екземпляр axios для роботи з api dummyjson.com */
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {
    /*Колбек для автоматичного переходу між сторінками за допомогою localStorage в якому є accessToken */
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})


export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    /*Асинхронна функція, яка логує через api з використанням Axios, логує за  username, password, expiresInMins, і повертає користувача з токеном
     {data: userWithTokens} відправляє запис про username, password, expiresInMins в https-запит login,
                            повертає в userWithTokens дані користувача, та два токена accessToken і refreshToken
     записуємо отримані дані в localStorage з ключем user, а дані перетворюємо в JSON-рядок */
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    /*Асинхронна функція, яка повертає масив продуктів
     {data: {products}} отримує відповідь з https-запиту products, який має тип IProductsResponseModelType
                         це тип має масив product з інтефейсом IPorduct*/

    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products
}


export const refresh = async () => {
    /*Асинхронна функція для оновлення токену
      iUserWithTokens - retriveLocalStorage передаємо інтерфейс IUserWithTokens та ключ user
      {data: {accessToken, refreshToken}} відправляє запис про refreshToken та expiresInMin в https-запит refresh,
                                          повертає нові дані про токени
      записуємо нові дані в localStorage в user та перетворюємо в JSON-рядок*/
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}
