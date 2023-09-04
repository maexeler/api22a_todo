import { Action, Computed, Thunk, action, computed, thunk } from "easy-peasy";
import Todo from "./Todo";
import todoService from "../service/impl/TodoFakeService"
// import todoService from "../service/impl/TodoRestService"

interface TodoModel {
    todos: Todo[]


    // Thunks async
    initData: Thunk<TodoModel>
    toggleCompleted: Thunk<TodoModel, Todo>
    delete: Thunk<TodoModel, Todo>

    // Action synchron
    _replaceTodo: Action<TodoModel, Todo>
    _delete: Action<TodoModel, Todo>
    _initData: Action<TodoModel, Todo[]>

    // view state Computed
    todosTodo: Computed<TodoModel, number>
}

export default TodoModel

const todoModel: TodoModel = {
    todos: [],

    todosTodo: computed((state) => {
        const counter = (sum: number, todo: Todo): number => sum + (todo.completed ? 0 : 1);
        return state.todos.reduce(counter, 0);
    }),

    toggleCompleted: thunk(async (actions, todo: Todo) => {
        todo.completed = !todo.completed;
        await todoService.update(todo).then(
            (todo: Todo) => { actions._replaceTodo(todo); }
        );
    }),

    delete: thunk(async (actions, todo: Todo) => {
        await todoService.delete(todo).then(
            () => { actions._delete(todo); }
        );
    }),

    _replaceTodo: action(
        (state, todo) => {
            state.todos.forEach((element, idx) => {
                if (todo.id === element.id) {
                    state.todos[idx] = { ...todo };
                }
            });
        }),

    _delete: action((state, todo) => {
        state.todos = state.todos.filter(
            (element) => { return element.id !== todo.id; }
        );
    }),
    
    initData: thunk(async (actions)=>{
        await todoService.readAll().then(
            (todos: Todo[]) => { actions._initData(todos) }
        )
    }),

    _initData: action((state, todos: Todo[])=>{
        state.todos = todos
    })
}

export {todoModel}