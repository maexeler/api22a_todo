import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Todo from "../../model/Todo"
import { useStoreActions, useStoreState } from "../../store/StoreModel";
import { act } from "@testing-library/react";

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
    const toggle = 
        useStoreActions((actions)=>actions.todoModel.toggleCompleted)
    const deleteTodo = 
        useStoreActions((actions)=>actions.todoModel.delete)
    
    const selectTodoFuction =
        useStoreActions((actions)=>actions.todoModel.selectTodo)
    const selectedTodo = 
        useStoreState((state)=>state.todoModel.selectedTodo)
    return (
        <ListItem key={todo.id} 
            onClick={()=>{selectTodoFuction(todo)}}
            selected={todo == selectedTodo}
        >
            <ListItemIcon>
                <Checkbox
                    checked={todo.completed} 
                    onClick={()=>{toggle(todo)}}
                />
            </ListItemIcon>

            <Typography >
                {todo.title}
            </Typography>

            <ListItemSecondaryAction>
                <IconButton 
                    onClick={()=>{deleteTodo(todo)}}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem