import React, { useContext } from "react";
import { Divider, Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import Todo from "./Todo";

import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);

  if (!todos || !todos.length) return null;

  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <div key={`todo-wrapper-${todo.id}`}>
            <Todo
              {...todo}
              key={todo.id}
            />
            {i < todos.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
