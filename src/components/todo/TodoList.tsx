import { List, ListItem } from "@mui/material"
import { useStoreState } from "../../store/StoreModel"
import TodoListItem from "./TodoListItem"
import TodoListItemNew from "./TodoListItemNew"

const TodoList: React.FC = () => {
    const todos = useStoreState((state) => state.todoModel.todos)
    return (
        <List>
            <TodoListItemNew />
            { todos.map(
                (todo)=>{
                    return <TodoListItem key={todo.id} todo={todo}/>
                })
            }
        </List>
    )
}

export default TodoList