import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import EditIcon from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    minWidth: 275,
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal className="modal" open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Edit Your TODO</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={updateTodo}>
            Update your Task
          </Button>
        </div>
      </Modal>
      <List>
        <Card className={classes.root}>
          <CardContent className="todo__list">
            <Typography variant="h5" component="h2">
              <List>
                <ListItem className="text">
                  <ListItemText primary=<b>{props.todo.todo} </b>/>
                </ListItem>

                <EditIcon color="primary" onClick={(e) => setOpen(true)} />
                <DoneOutlineIcon
                  variant="contained"
                  color="secondary"
                  onClick={(event) =>
                    db.collection("todos").doc(props.todo.id).delete()
                  }
                />
              </List>{" "}
            </Typography>
          </CardContent>
        </Card>
      </List>
    </>
  );
}

export default Todo;
