import React, { useContext, memo } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./contexts/todos.context";

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);

  const [isEditing, toggle] = useToggle();
  console.log("TODO RE-RENDER: ", task);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({type: 'TOGGLE', id: id})}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch({type: 'REMOVE', id: id})}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
