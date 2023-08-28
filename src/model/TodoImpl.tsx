import Todo from "./Todo";

class TodoImpl implements Todo {
    id: string | number | null;
    title: string;
    completed: boolean;
    
    constructor(title: string) {
        this.id = null
        this.title = title
        this.completed = false
    }
}

export default TodoImpl