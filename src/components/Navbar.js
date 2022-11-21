import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const Navbar = ()=>{
    return (
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "6vh" }}>
            <CssBaseline />
            <AppBar position="center">
            <Toolbar>
                <Typography component="h1" variant="h5">
                    Trend Topic Manip
                </Typography>
            </Toolbar>
            </AppBar>
            <main>
            </main>
        </Grid>
    </ThemeProvider>
    );  
}
export default Navbar;