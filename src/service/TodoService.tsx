import Todo from "../model/Todo"

/** CRUD */
interface TodoService {
    add(todo: Todo): Promise<Todo>
    readAll(): Promise<Todo[]>
    update(todo: Todo): Promise<Todo>
    delete(todo: Todo): Promise<null>
}

export default TodoService