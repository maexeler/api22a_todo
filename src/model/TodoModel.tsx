import { Action, Thunk, action, thunk } from "easy-peasy";
import fake_todos from "../fake_data/todo_data";
import Todo from "./Todo";
import todoService from "../service/impl/TodoFakeService"

interface TodoModel {
    todos: Todo[]

    toggleCompleted: Thunk<TodoModel, Todo>

    _replaceTodo: Action<TodoModel, Todo>
}

export default TodoModel

const todoModel: TodoModel = {
    todos: fake_todos, // TODO []

    toggleCompleted: thunk(async (actions, todo: Todo) => {
        todo.completed = !todo.completed
        await todoService.update(todo).then(
            (todo: Todo) => {actions._replaceTodo(todo)}
        )
    }),

    _replaceTodo: action(
        (state, todo) => {
            state.todos.forEach((element, idx) => {
                if (todo.id === element.id) {
                    state.todos[idx] = {...todo}
                }
            });
    })
}

export {todoModel}