import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css';
import React from 'react'
import db from './firebase';


function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
             <ListItemText primary={props.todo.todo} secondary= "Deadline" />
             </ListItem>
             <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Mark as Done</Button>
        </List>
    )
}

export default Todo
