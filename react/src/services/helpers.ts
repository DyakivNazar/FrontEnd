export const retriveLocalStorage = <T>(key: string) => {
    /*Функція з параметром типу T, з один значенням key з типом текстовий рядок
      object витягує з localStorage дані за ключем, або пусте поле
       якщо немає object, повертаємо пустий об'єкт з примусовим типом T
       інакше ми в parse перетворюємо JSON-рядок у JSON-об'єкт, та повертаємо його з примусовим типом T */
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;

}
