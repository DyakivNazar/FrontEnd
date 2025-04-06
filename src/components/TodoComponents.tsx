import {useEffect, useState} from "react";
import {ITodos} from "../models/ITodos.ts";
import {getTodos} from "../services/api.server.ts";
import TodoComponent from "./TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodos[]>([]);
    useEffect(() => {
        const fetchData = async () =>{
            const todos = await getTodos();
            setTodos(todos);
        }
        fetchData();
    })
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};

export default TodoComponents;