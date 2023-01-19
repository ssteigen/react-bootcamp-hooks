import React from "react";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
