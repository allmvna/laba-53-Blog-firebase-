import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, mb: 5 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Container sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography to='/' color="inherit" variant="h6" component={NavLink} sx={{ flexGrow: 1, textDecoration: "none" }}>
                                My Blog
                            </Typography>
                            <Box>
                                <Button to='/posts' color="inherit" component={NavLink}>Home</Button>
                                <Button to='/new-post' color="inherit" component={NavLink}>Add</Button>
                                <Button to='/about' color="inherit" component={NavLink}>About</Button>
                                <Button to='/contacts' color="inherit" component={NavLink}>Contacts</Button>
                            </Box>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;