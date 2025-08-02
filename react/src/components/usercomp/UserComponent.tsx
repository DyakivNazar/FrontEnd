import {memo} from "react";

const UserComponent = memo(() => {
    /*memo це функція, яка не дозволяє повторно відображати вміст цього файлу(сторінки).
    Для того, щоб зменшити навантаження на сайт, якщо в цьому файлі(сторінці) є багато інформації,
    яка довго завантажується або не треба вдруге викликати її */

    console.log('user')
    return (
        <div>
            user
        </div>
    );
});

export default UserComponent;