import { Action, Computed, Thunk, action, computed, thunk } from "easy-peasy";
import fake_todos from "../fake_data/todo_data";
import Todo from "./Todo";
import todoService from "../service/impl/TodoFakeService"

interface TodoModel {
    todos: Todo[]

    todosTodo: Computed<TodoModel, number>

    toggleCompleted: Thunk<TodoModel, Todo>
    delete: Thunk<TodoModel, Todo>

    _replaceTodo: Action<TodoModel, Todo>
    _delete: Action<TodoModel, Todo>
}

export default TodoModel

const todoModel: TodoModel = {
    todos: fake_todos, // TODO []

    todosTodo: computed((state)=>{
        const counter = (sum: number, todo: Todo): number => sum + (todo.completed ? 0 : 1)
        return state.todos.reduce(counter, 0)
    }),

    toggleCompleted: thunk(async (actions, todo: Todo) => {
        todo.completed = !todo.completed
        await todoService.update(todo).then(
            (todo: Todo) => {actions._replaceTodo(todo)}
        )
    }),

    delete: thunk(async (actions, todo: Todo)=>{
        await todoService.delete(todo).then(
            () => { actions._delete(todo)}
        )
    }),

    _replaceTodo: action(
        (state, todo) => {
            state.todos.forEach((element, idx) => {
                if (todo.id === element.id) {
                    state.todos[idx] = {...todo}
                }
            })
    }),

    _delete: action((state, todo)=>{
        state.todos = state.todos.filter(
            (element)=>{return element.id != todo.id}
       )
    })

}

export {todoModel}