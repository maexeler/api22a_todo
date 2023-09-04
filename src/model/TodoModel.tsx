import { Action, Computed, Thunk, action, computed, thunk } from "easy-peasy";
import Todo from "./Todo";
import todoService from "../service/impl/TodoFakeService"
// import todoService from "../service/impl/TodoRestService"

interface TodoModel {
    todos: Todo[]
    selectedTodo: Todo | null


    // Thunks async
    initData: Thunk<TodoModel>
    toggleCompleted: Thunk<TodoModel, Todo>
    delete: Thunk<TodoModel, Todo>
    addTodo: Thunk<TodoModel, Todo>
    updateTodo: Thunk<TodoModel, Todo>


    // Action synchron
    _replaceTodo: Action<TodoModel, Todo>
    _delete: Action<TodoModel, Todo>
    _initData: Action<TodoModel, Todo[]>
    _addTodo: Action<TodoModel, Todo>

    // view state 
    todosTodo: Computed<TodoModel, number> // Computed
    selectTodo: Action<TodoModel, Todo>
    resetSelectedTodo: Action<TodoModel>
}

export default TodoModel

const todoModel: TodoModel = {
    todos: [],
    selectedTodo: null,

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
    }),

    selectTodo: action((state, todo: Todo)=>{
        state.selectedTodo = todo
    }),

    resetSelectedTodo: action((state)=>{
        state.selectedTodo = null
    }),

    addTodo: thunk(async (actions, todo: Todo)=>{
        await todoService.add(todo).then(
            (todo: Todo)=>{actions._addTodo(todo)}
        )
    }),

    updateTodo: thunk(async (actions, todo: Todo)=>{
        await todoService.update(todo).then(
            (todo: Todo)=>{actions._replaceTodo(todo)}
        )
    }),

    _addTodo: action((state, todo)=>{
        state.todos.unshift(todo) // TODO ???
    })
}

export {todoModel}