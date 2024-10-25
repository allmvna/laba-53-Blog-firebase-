import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IPostAPI } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Loader from "../../UI/Loader/Loader.tsx";

const IdPost = () => {
  const [post, setPost] = useState<IPostAPI | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams<{ IdPost: string }>();
  const navigate = useNavigate();

  const fetchOnePost = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const response: { data: IPostAPI } = await axiosAPI<IPostAPI>(
        `posts/${id}.json`,
      );
      if (response.data) {
        setPost(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePost = async () => {
    await axiosAPI.delete(`posts/${params.IdPost}.json`);
    navigate("/");
  };

  useEffect(() => {
    if (params.IdPost) {
      void fetchOnePost(params.IdPost);
    }
  }, [params.IdPost, fetchOnePost]);

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 2, textAlign: "center", color: "#000" }}
      >
        Post
      </Typography>
      {loading ? (
        <Loader />
      ) : post ? (
        <Card
          sx={{
            minWidth: 275,
            border: "1px solid #111c2e",
            borderRadius: "10px",
            p: 1,
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: 18,
              }}
            >
              Created on: {post.date}
            </Typography>
            <CardContent
              sx={{ border: "1px solid  #9e9e9e", borderRadius: "10px", mb: 1 }}
            >
              <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                Title: {post.title}
              </Typography>
              <hr />
              <Typography sx={{ fontSize: 16 }}>
                Description: {post.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                component={NavLink}
                to={`/posts/${params.IdPost}/edit`}
                variant="contained"
                size="medium"
                startIcon={<FormatListBulletedIcon />}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                size="medium"
                startIcon={<DeleteIcon />}
                onClick={deletePost}
              >
                Delete
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ) : (
        <Alert severity="warning">
          There are no posts yet! Go to the "Add" page to add a new post
        </Alert>
      )}
    </>
  );
};

export default IdPost;
