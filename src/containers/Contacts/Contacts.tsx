import { Alert, Container, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const Contacts = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 2, textAlign: "center", color: "#000" }}
      >
        Contacts
      </Typography>
      <Container
        sx={{
          border: "3px solid #000",
          borderRadius: "10px",
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <img
          src="https://i.pinimg.com/564x/80/88/53/808853515827e33ebe1b39ccb13dbc43.jpg"
          alt="Blog illustration"
          style={{
            width: "50%",
            maxWidth: "200px",
            height: "auto",
            borderRadius: "10px",
            marginRight: "10px",
          }}
          loading="lazy"
        />
        <Alert severity="info">
          Please contact me via telegram!
          <TelegramIcon sx={{ ml: 1 }} />
        </Alert>
      </Container>
    </>
  );
};

export default Contacts;
