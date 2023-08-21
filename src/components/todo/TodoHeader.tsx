import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const TodoHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Todo Application
                </Typography>
                <Button 
                    color="inherit"
                    onClick={()=>{navigate("/todo")}}
                >
                    Todo
                </Button>
                <Button 
                    color="inherit"
                    onClick={()=>{navigate("/about")}}
                >
                    About
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default TodoHeader