export type LoginData = {
    /*Власний тип LoginData для
        Ім’я користувача - текстовий рядок
        Пароль - текстовий рядок
        Час, на який дійсний логін (у хвилинах) - числове значення
    */
    username: string;
    password: string;
    expiresInMins: number
}