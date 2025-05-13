import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IPosts} from "../models/IPosts.ts";
import {IPostsResponseModelType} from "../models/IPostsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
import {LoginData} from "../models/LoginData.ts";


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


export const login = async (log: LoginData): Promise<IUserWithTokens> => {
    /*Асинхронна функція, яка логує через api з використанням Axios, логує за log, і повертає користувача з токеном
     logWithExpiry додаємо параметр expiresInMins
     {data: userWithTokens} відправляє запис про logWithExpiry в https-запит login,
                            повертає в userWithTokens дані користувача, та два токена accessToken і refreshToken
     записуємо отримані дані в localStorage з ключем user, а дані перетворюємо в JSON-рядок */

    const logWithExpiry = {
        ...log,
        expiresInMins: 1
    };

    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', logWithExpiry);
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthPosts = async (): Promise<IPosts[]> => {
    /*Асинхронна функція, яка повертає масив продуктів
     {data: {posts}} отримує відповідь постів зареєстрованого користувача з https-запиту posts, який має тип IPostsResponseModelType
                         це тип має масив posts з інтефейсом IPosts*/
    const userId = retriveLocalStorage<IUserWithTokens>('user').id;

    const {data: {posts}} = await axiosInstance.get<IPostsResponseModelType>('/posts/user/'+ userId);
    return posts
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
