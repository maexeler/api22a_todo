import { Grid, Typography } from "@mui/material"
import TodoForm from "./TodoForm"

const NewTodo: React.FC = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography variant="h3">
                     Add new Todo
                </Typography>
            </Grid>
            <Grid item >
                <TodoForm />
            </Grid>
        </Grid>
    )
}

export default NewTodo