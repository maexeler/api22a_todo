import axios from "axios";

import Todo from "../../model/Todo";
import TodoService from "../TodoService";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'},
  });

async function callForData<R>(httpFun: any, uri: string, params?: any): Promise<R> {
    return new Promise<R>((resolve, reject) => {
        httpFun(uri, params)
            .then((response: any) => { resolve(response.data) })
            .catch((error: any) => { reject(error) })
    })
}

class RestTodoService implements TodoService {
    

    add(todo: Todo): Promise<Todo> {
        // return callForData(http.post, '/todos', todo)

        return new Promise( (ok, onError) => {
            http.put('/todos', todo)
            .then((response: any) => ok(response.data))
            .catch((error) => console.log(error))
        })
    }

    readAll(): Promise<Todo[]> {
        // return callForData(http.get, '/todos?_limit=15')

        return new Promise( (ok, onError) => {
            http.get('/todos?_limit=15')
            .then((response: any) => ok(response.data))
            .catch((error) => console.log(error))
        })
    }

    update(todo: Todo): Promise<Todo> {
        // return callForData(http.patch, '/todos', todo)

        return new Promise( (ok, onError) => {
            http.patch(`/todos/${todo.id}`, todo)
            .then((response: any) => ok(response.data))
            .catch((error) => console.log(error))
        })
    }
    delete(todo: Todo): Promise<null> {
        // return callForData(http.delete, `/todos/${todo.id}`)

        return new Promise( (ok, onError) => {
            http.delete(`/todos/${todo.id}`)
            .then((response: any) => ok(response.data))
            .catch((error) => console.log(error))
        })
    }
}

const todoService = new RestTodoService()

export default todoService