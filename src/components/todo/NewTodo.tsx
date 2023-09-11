import { Grid, Typography } from "@mui/material"
import TodoForm from "./TodoForm"
import FormikTestForm from "./FormikTestForm"
import TodoImpl from "../../model/TodoImpl"
import Todo from "../../model/Todo"

interface NewTodoProps {
    submitFkt(todo: Todo): void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant="h3">
                     Add new Todo
                </Typography>
            </Grid>
            <Grid item >
                <TodoForm 
                    todo={ new TodoImpl('') }
                    submitFunction={ props.submitFkt }
                    submitText='Add ToDo'
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
    )
}

export default NewTodo