import {FC, memo} from "react";

const UserComponent:FC<{foo:() =>void, arr:number[]}> = memo(({arr}) => {
    /*memo це функція оптимізації, яка не дозволяє повторно відображати вміст цього файлу(сторінки).
    Для того, щоб зменшити навантаження на сайт, якщо в цьому файлі(сторінці) є багато інформації,
    яка довго завантажується або не треба вдруге викликати її */

    console.log('user')
    console.log(arr)
    return (
        <div>
            user
        </div>
    );
});

export default UserComponent;