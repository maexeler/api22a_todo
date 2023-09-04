import { useStoreState } from "../../store/StoreModel"
import EditTodo from "./EditTodo"
import NewTodo from "./NewTodo"

const TodoView: React.FC = () => {
    const selectedTodo =
        useStoreState((state)=>state.todoModel.selectedTodo)
    return (
        selectedTodo == null
        ? <NewTodo />
        : <EditTodo />
    )
}

export default TodoView