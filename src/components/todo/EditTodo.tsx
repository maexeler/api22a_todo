import { Grid, Typography } from "@mui/material"
import TodoForm from "./TodoForm"
import { useStoreState } from "../../store/StoreModel"

const EditTodo: React.FC = () => {
    const selectedTodo = 
        useStoreState((state)=>state.todoModel.selectedTodo)
    return (
        <Grid container>
            <Grid item>
                <Typography variant="h3">
                     Edit new Todo
                </Typography>
            </Grid>
            <Grid item >
                <TodoForm />
            </Grid>
        </Grid>
    )
}

export default EditTodo