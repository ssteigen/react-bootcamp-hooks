import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers.js/todo.reducer";

const defaultTodos = [
    { id: 1, task: "Mow the lawn", completed: false },
    { id: 2, task: "Take out the trash", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider({children}) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {children}
        </TodosContext.Provider>
    )
}
