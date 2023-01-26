import React, { createContext } from "react";
import todoReducer from "../reducers.js/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Take out the trash", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
