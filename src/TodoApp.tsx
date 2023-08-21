import AppLayout from "./components/application/AppLayout"
import TodoPage from "./components/todo/TodoPage"
import TodoHeader from "./components/todo/TodoHeader"
import PageNotFoundPage from "./components/page_not_found/PageNotFoundPage"
import AboutPage from "./components/about/AboutPage"

import { useLocation } from "react-router-dom"

const TodoApp: React.FC = () => {
    let body = <PageNotFoundPage />
    switch (useLocation().pathname) {
        case '/': body = <TodoPage />; break
        case '/todo': body = <TodoPage />; break
        case '/about': body = <AboutPage />; break
    }
    return (
        <AppLayout 
            header=<TodoHeader/>
            body={body}
        />
    )
}

export default TodoApp
