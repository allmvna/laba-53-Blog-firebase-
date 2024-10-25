import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 2, textAlign: "center", color: "#000" }}
      >
        About Us
      </Typography>
      <Container
        sx={{
          border: "3px solid #000",
          borderRadius: "10px",
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://i.pinimg.com/564x/be/50/a3/be50a302d35390fb85ba0bd65f5095d0.jpg"
          alt="Blog illustration"
          style={{
            width: "80%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "10px",
            marginRight: "10px",
          }}
          loading="lazy"
        />
        <Typography sx={{ color: "#000", textAlign: "justify" }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Technical Features of this Blog:
          </Typography>
          <p>
            This blog application, designed to work with the API on Firebase,
            provides users with the ability to easily create, edit and view
            posts.
          </p>

          <p>
            Creating and editing posts: The same form component is used for both
            creating and editing posts. If the post ID is missing from the URL,
            the application executes a POST request to create a new post.
            Otherwise, a GET request is made to receive the post data, which
            then fills out the form.
          </p>

          <p>
            Deleting posts: Deleting a post is done using a DELETE request to
            the API. After successful deletion, the user is automatically
            redirected to the main page.
          </p>

          <p>
            Preloader: To improve the user experience, the application displays
            a spinner when loading data, both on the pages of creating, editing,
            and viewing posts.
          </p>

          <p>
            About and Contacts pages: These pages can also get their data from
            the API. To do this, developers can create appropriate entries in
            the Firebase database in advance to provide users with up-to-date
            information.
          </p>

          <p>
            Это приложение-блог предлагает простоту и функциональность, позволяя
            пользователям сосредоточиться на создании контента и взаимодействии
            с ним. Использование Firebase в качестве бекенда обеспечивает
            надежное хранение данных и легкий доступ к API, а продуманная
            навигация и пользовательский интерфейс делают его удобным в
            использовании.
          </p>
        </Typography>
      </Container>
    </>
  );
};

export default About;
