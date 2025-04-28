import {FC} from "react";
import {ITodos} from "../models/ITodos.ts";

type TodoType ={
    item: ITodos
}

const TodoComponent:FC<TodoType> = ({item}) => {
    return (
        <div>
            <p>{item.userId}</p>
            <p>{item.title}</p>
        </div>
    );
};

export default TodoComponent;