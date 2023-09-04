import { Grid, Typography } from "@mui/material"
import TodoForm from "./TodoForm"
import FormikTestForm from "./FormikTestForm"

const NewTodo: React.FC = () => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant="h3">
                     Add new Todo
                </Typography>
            </Grid>
            <Grid item >
                {/* <TodoForm /> */}
                <FormikTestForm />
            </Grid>
        </Grid>
    )
}

export default NewTodo