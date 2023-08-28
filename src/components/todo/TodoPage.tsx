import TodoList from "./TodoList"
import TodosCompleted from "./TodosCompleted"

const TodoPage: React.FC = () => {
    return (
        <>
        <TodosCompleted/>
        <TodoList/>
        </>
    )
}

export default TodoPage