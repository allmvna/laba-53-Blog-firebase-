import {useCallback, useEffect, useState} from 'react';
import {IPost, IPostAPI} from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import {Alert, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";

const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);


    const fetchData = useCallback(async () => {
        const response: {data: IPostAPI} = await axiosAPI<IPostAPI>('posts.json');

        if(response.data){
            const postFromApi = Object.keys(response.data).map(postKey => {
                return{
                    ...response.data[postKey],
                    id: postKey,
                };
            });
            setPosts(postFromApi);
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);


    return (
        <>
            <Typography variant = 'h4' sx={{mb: 4}}>Posts</Typography>
            {posts.length === 0 ?<Alert severity="info">There are no posts yet! Go to the "Add" page to add a new post</Alert> :
             <>
                 <Grid container spacing={2}>
                     {posts.map(post => (
                         <Grid size = {12} key={post.id}>
                             <Card sx={{ minWidth: 275 }}>
                                 <CardContent>
                                     <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        Data: {post.date}
                                     </Typography>
                                     <Typography sx={{fontSize: 18 }}>{post.title}</Typography>
                                     <Typography sx={{fontSize: 15 }}>{post.description}</Typography>
                                 </CardContent>
                                 <CardActions>
                                     <Button variant ='contained' size="small">Read more</Button>
                                 </CardActions>
                             </Card>
                         </Grid>
                     ))}
                 </Grid>
             </>
            }
        </>
    );
};

export default Home;