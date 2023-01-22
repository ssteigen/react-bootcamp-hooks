import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    { id: 1, task: "Mow the lawn", completed: false },
    { id: 2, task: "Take out the trash", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider({children}) {
    const todoStuff = useTodoState(defaultTodos);

    return (
        <TodosContext.Provider value={todoStuff}>
            {children}
        </TodosContext.Provider>
    )
}