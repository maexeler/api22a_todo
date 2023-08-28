import Todo from "../../model/Todo";
import TodoService from "../TodoService";

const todoService: TodoService = {
    add: function (todo: Todo): Promise<Todo> {
        throw new Error("Function not implemented.");
    },
    readAll: function (): Promise<Todo[]> {
        throw new Error("Function not implemented.");
    },
    update: function (todo: Todo): Promise<Todo> {
        throw new Error("Function not implemented.");
    },
    delete: function (todo: Todo): Promise<null> {
        throw new Error("Function not implemented.");
    }
}

export default todoService