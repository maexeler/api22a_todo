import { Button, Grid, TextField, TextFieldProps } from "@mui/material"
import { Field, FieldProps, Form, Formik } from "formik"
import Todo from "../../model/Todo"

interface TodoFormProps {
    todo: Todo
    submitText: String
    submitFunction(todo: Todo): void
    resetFormAfterSubmit: boolean
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    return (
        <Formik
            initialValues={
                {title: props.todo.title}
            }
            onSubmit={(values, {resetForm})=>{
                props.todo.title = values.title
                props.submitFunction(props.todo)
                if (props.resetFormAfterSubmit) {
                    resetForm()
                }
                console.log(JSON.stringify(values, null, 2))
            }}
        >
            <Form>
                <Grid container direction='column' spacing={1}>
                    <Grid item>
                        <Field 
                            name='title'
                            component={MuiField}
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                            {props.submitText}
                    </Button>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}

const MuiField: React.FC<FieldProps & TextFieldProps> = 
    ({field, form, ...textProps}) => {
        return (
            <TextField {...field} {...textProps}></TextField>
        )
    }

export default TodoForm