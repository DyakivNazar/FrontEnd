import {IcoursesAndDurationArray} from "../../models/IcoursesAndDurationArray.ts";
import {FC} from "react";
import './MycoursesAndDurationArray.css'

type MycoursesType ={
    course: IcoursesAndDurationArray,
}
const MycoursesAndDurationArray:FC<MycoursesType> = ({course}) => {
    return (
        <div>
            <h1>Назва курсу: {course.title}</h1>
            <p>Тривалість: {course.monthDuration}</p>
        </div>
    );
};

export default MycoursesAndDurationArray;