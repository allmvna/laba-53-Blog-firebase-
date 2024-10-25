import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

const Navbar = () => {
  const buttonStyles = {
    borderColor: "inherit",
    marginRight: "8px",
    color: "white",
    "&:hover": {
      borderColor: "#0022ff",
      color: "#6274db",
    },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <AppBar
          position="static"
          sx={{
            padding: "10px",
            backgroundColor: "#161b34",
            borderBottom: "1px solid",
          }}
        >
          <Toolbar>
            <Container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                to="/"
                variant="h5"
                component={NavLink}
                sx={{ flexGrow: 1, textDecoration: "none", color: "#ffff" }}
              >
                My Blog
              </Typography>
              <Box>
                <Button
                  to="/posts"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<HomeIcon />}
                >
                  Home
                </Button>
                <Button
                  to="/new-post"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<AddIcon />}
                >
                  Add
                </Button>
                <Button
                  to="/about"
                  sx={buttonStyles}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<InfoIcon />}
                >
                  About
                </Button>
                <Button
                  to="/contacts"
                  sx={{ ...buttonStyles, marginRight: 0 }}
                  variant="outlined"
                  component={NavLink}
                  endIcon={<RecentActorsIcon />}
                >
                  Contacts
                </Button>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
