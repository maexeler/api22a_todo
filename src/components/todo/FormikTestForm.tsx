import { Grid, TextField, TextFieldProps, Typography } from "@mui/material"
import { Field, FieldProps, Form, Formik } from "formik"
import * as Yup from 'yup'

const FormikTestForm: React.FC = () => {
    return (
        <Formik
            initialValues={{userName: '', email: ''}}
            validationSchema={testFormValidationSchema}
            onSubmit={(values)=>{
                console.log(JSON.stringify(values, null, 2))
            }}
        >
            {({errors, touched}) => {
                return <Form>
                    <Grid container direction='column'spacing={1}>
                        <Grid item>
                            <Field name='userName' type='text'/>
                        </Grid>
                        <Grid item>
                        <Field 
                                name='email' 
                                component={MaterialUiField}
                                placeholder='Enter an email'
                                label='Email'
                        />
                        {errors.email && touched.email
                            ?   <Typography color='secondary' >
                                    {errors.email}
                                </Typography>
                            :   null
                        }
                        </Grid>
                        <Grid item>
                        <button type="submit">Submit</button>
                        </Grid>
                    </Grid>
                </Form>
            }}
        </Formik>
    )
}

const MaterialUiField: React.FC<FieldProps & TextFieldProps> = 
    ({field, form, ...textProps}) => 
        <TextField
            fullWidth 
            {...field} {...textProps}
        />

const testFormValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required('An email is required')
        .email('Invalid email')
})

export default FormikTestForm