import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggle }) {
  const { editTodo } = useContext(TodosContext);

  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
