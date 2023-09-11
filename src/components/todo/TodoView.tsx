
import { useStoreState, useStoreActions} from "../../store/StoreModel"
import EditTodo from "./EditTodo"
import NewTodo from "./NewTodo"

const TodoView: React.FC = () => {
    const selectedTodo =
        useStoreState((state)=>state.todoModel.selectedTodo)
    const updateTodoFkt =
        useStoreActions((actions)=>actions.todoModel.updateTodo)
    const newTodoFkt =
        useStoreActions((actions)=>actions.todoModel.addTodo)
        
    return (
        selectedTodo == null
        ? <NewTodo submitFkt = {newTodoFkt}/>
        : <EditTodo todo = {selectedTodo} submitFkt = {updateTodoFkt}/>
    )
}

export default TodoView