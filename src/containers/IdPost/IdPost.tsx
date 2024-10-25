import {NavLink, useParams, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {IPostAPI} from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import {Alert, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const IdPost = () => {
    const [post, setPost] = useState<IPostAPI | null>(null);
    const params = useParams<{ IdPost: string }>();
    const navigate = useNavigate();

    const fetchOnePost = useCallback(async (id: string) => {
        const response: {data: IPostAPI} = await axiosAPI<IPostAPI>(`posts/${id}.json`);

        if(response.data){
            setPost(response.data);
        }
    }, []);

    const deletePost = async () => {
        await axiosAPI.delete(`posts/${params.IdPost}.json`);
        navigate('/');

    };

    useEffect(() => {
        if (params.IdPost) {
            void fetchOnePost(params.IdPost);
        }

    }, [params.IdPost, fetchOnePost]);

    return (
        <>
            <Typography variant = 'h4' sx={{mb: 4}}>Post</Typography>
            {post ? (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 16 }}>
                           Created on:  {post.date}
                        </Typography>
                        <hr/>
                        <Typography sx={{fontSize: 18 }}>Title: {post.title}</Typography>
                        <Typography sx={{fontSize: 16 }}>Description: {post.description}</Typography>
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                            <Button component={NavLink} to={`/posts/${params.IdPost}/edit`} variant="contained" color="success" size="small" startIcon={<FormatListBulletedIcon/>}>
                                Edit
                            </Button>
                            <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={deletePost}>
                                Delete
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            ) : (
                <Alert severity="warning">There are no posts yet! Go to the "Add" page to add a new post</Alert>
            )}
        </>
    );
};

export default IdPost;