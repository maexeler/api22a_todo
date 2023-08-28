import { nanoid } from 'nanoid'

import fake_todos from "../../fake_data/todo_data";
import Todo from "../../model/Todo";
import TodoService from "../TodoService";


class FakeTodoService implements TodoService {
    _todos: Todo[] = []

    constructor() {
        this._todos = fake_todos
    }
    
    add(todo: Todo): Promise<Todo> {
        todo.id = nanoid() // get unique id
        this._todos.push(todo)
        return new Promise((ok, error)=>{
            setTimeout(()=>{ok({...todo})}, 100) // copy
        })
    }
    readAll(): Promise<Todo[]> {
        return new Promise( (ok, error) => {
            setTimeout(()=>{ok(this._todos)}, 1000)
        })
    }
    update(todo: Todo): Promise<Todo> {
        this._todos.forEach((element, idx) => {
            if (todo.id === element.id) {
                this._todos[idx] = {...todo}
            }
        })
        return new Promise((ok, error)=>{
            setTimeout(()=>{ok({...todo})}, 100) // copy
        })
    }

    delete(todo: Todo): Promise<null> {
        this._todos = this._todos.filter(
             (element)=>{return element.id != todo.id}
        )
        return new Promise( (ok, error) => {
            setTimeout(()=>{ok(null)}, 100)
        })
    }   
 }

const todoService = new FakeTodoService()

export default todoService