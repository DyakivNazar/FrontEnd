import {ICourse} from "../../models/IcoursesArray.ts";
import {FC} from "react";
import './MycoursesArray.css'

type coursesArrayType = {
    course:ICourse;
}

const MycoursesArray:FC<coursesArrayType> = ({course}) => {

    return (
        <div>
            <h2>Назва {course.title}</h2>
            <p>Тривалість в місяцях - {course.monthDuration} </p>
            <p>Тривалість в годинах - {course.hourDuration} </p>
            Модулі:
            <ul>
                {course.modules.map((module, index) => <li key={index}>{module}</li>)}
            </ul>

        </div>
    );
};

export default MycoursesArray;