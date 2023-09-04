import { Grid } from "@mui/material"
import TodoList from "./TodoList"
import TodosCompleted from "./TodosCompleted"
import TodoLayout from "./TodoLayout"

const TodoPage: React.FC = () => {
    return (
        <Grid container >
            <Grid item xs={12}><TodosCompleted/></Grid>
            <Grid item xs={12}><TodoLayout /></Grid>
        </Grid>
    ) 
}

export default TodoPage