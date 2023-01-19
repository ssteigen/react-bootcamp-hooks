import React from "react";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fish Tank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    // filter out todo with id from todos array
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // call set todos with new todos array
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? {...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

/**
 * Todo App
 * - TodoForm
 * - TodoList
 * - - TodoItem
 */

/**
 * Tasks are made of
 * id, task, completed
 */
