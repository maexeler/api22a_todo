import { Grid } from "@mui/material"

interface AppLayoutProps {
    header: React.ReactElement
    body: React.ReactElement
}

const AppLayout: React.FC<AppLayoutProps> = ({header, body}) => {
    return (
        <Grid container direction="column">
            <Grid item>
                {header}
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item xs="auto" sm={1}  lg={2}></Grid>
                    <Grid item xs={12}   sm={10} lg={8}>
                        {body}
                    </Grid>
                    <Grid item xs="auto" sm={1}  lg={2}></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppLayout