import React from "react";
import { Divider, Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (!todos || !todos.length) return null;

  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
              {...todo}
              key={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
