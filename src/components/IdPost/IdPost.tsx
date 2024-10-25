import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {IPostAPI} from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import {Card, CardContent, Typography} from "@mui/material";

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
            {post ? (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {post.date}
                        </Typography>
                        <Typography sx={{fontSize: 18 }}>{post.title}</Typography>
                        <Typography sx={{fontSize: 15 }}>{post.description}</Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography>Загрузка данных или пост не найден...</Typography>
            )}
        </>
    );
};

export default IdPost;