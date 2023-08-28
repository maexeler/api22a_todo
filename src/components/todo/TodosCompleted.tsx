import { useStoreState } from "../../store/StoreModel"

const TodosCompleted: React.FC = () => {
    const completed = useStoreState((state)=>state.todoModel.todosTodo)
    const display = 
        completed === 0 
            ? "Nothing to do" 
            : `${completed} more ToDos to do`
    return (
        <h3>{display}</h3>
    )
}

export default TodosCompleted