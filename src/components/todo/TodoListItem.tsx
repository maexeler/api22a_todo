import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Todo from "../../model/Todo"
import { useStoreActions } from "../../store/StoreModel";

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
    const toggle = 
        useStoreActions((actions)=>actions.todoModel.toggleCompleted)
        
    return (
        <ListItem key={todo.id} >
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
                    onClick={()=>{console.log("delete")}}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem