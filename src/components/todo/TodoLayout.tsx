import { useTheme, useMediaQuery, Paper, Grid } from "@mui/material"
import TodoList from "./TodoList"
import TodoView from "./TodoView"

const TodoLayout: React.FC = () => {
    const theme = useTheme()

    return (
        useMediaQuery(theme.breakpoints.up('sm'))
        ? <Paper>
            <Grid container spacing={1}>
                <Grid item xs={4}> <TodoList/></Grid>
                <Grid item xs={8}> <TodoView/></Grid>
            </Grid>
        </Paper>
        : <Paper>
            <Grid container spacing={1}>
                <Grid item xs={12}> <TodoView/></Grid>
                <Grid item xs={12}> <TodoList/></Grid>
            </Grid>
        </Paper>

        // <TodoList />
        // <TodoView />

        // <TodView />
        // <TodoList />
    )
}

export default TodoLayout