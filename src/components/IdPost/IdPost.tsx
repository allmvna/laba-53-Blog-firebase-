import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {IPostAPI} from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import {Alert, Card, CardContent, Typography} from "@mui/material";

const IdPost = () => {
    const [post, setPost] = useState<IPostAPI | null>(null);
    const params = useParams<{ IdPost: string }>();

    const fetchOnePost = useCallback(async (id: string) => {
        const response: {data: IPostAPI} = await axiosAPI<IPostAPI>(`posts/${id}.json`);

        if(response.data){
            setPost(response.data);
        }
    }, []);

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
                        <Typography sx={{fontSize: 18 }}>Description: {post.description}</Typography>
                    </CardContent>
                </Card>
            ) : (
                <Alert severity="warning">There are no posts yet! Go to the "Add" page to add a new post</Alert>
            )}
        </>
    );
};

export default IdPost;