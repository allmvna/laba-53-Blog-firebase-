import Navbar from "../../components/Navbar/Navbar.tsx";
import { Container, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home.tsx";
import Contacts from "../Contacts/Contacts.tsx";
import Add from "../Add/Add.tsx";
import About from "../About/About.tsx";
import IdPost from "../IdPost/IdPost.tsx";
import PostForm from "../../components/PostForm/PostForm.tsx";

const Blog = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container maxWidth="lg" sx={{ color: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:IdPost" element={<IdPost />} />
          <Route path="/posts/:IdPost/edit" element={<PostForm />} />
          <Route path="/new-post" element={<Add />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="*"
            element={<Typography variant="h2">Not found</Typography>}
          />
        </Routes>
      </Container>
    </>
  );
};

export default Blog;
