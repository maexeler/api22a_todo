import AppLayout from "./components/application/AppLayout"
import TodoBody from "./components/todo/TodoBody"
import TodoHeader from "./components/todo/TodoHeader"

const TodoApp: React.FC = () => {
    return (
        <AppLayout 
            header=<TodoHeader/>
            body=<TodoBody />
        />
    )
}

export default TodoApp
