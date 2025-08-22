import { useEffect, useReducer } from "react";
import { todoReducer } from "../components";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleAdd = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo,
        });
    };
    const handleDel = (id) => {
        dispatch({
            type: "del",
            payload: id,
        });
    };
    const handleToggle = (id) => {
        dispatch({
            type: "toggle",
            payload: id,
        });
    };
    const couterTodos = todos.length;
    const penddingTodos = todos.filter((todo) => !todo.done).length;

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return {
        todos,
        handleAdd,
        handleDel,
        handleToggle,
        couterTodos,
        penddingTodos,
    };
};
