import React, {useCallback, useEffect, useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {IPostAPI, IPostForm} from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../UI/Loader/Loader.tsx";

const initialState = {
    title: "",
    description: ""
};

const PostForm = () => {
    const [form, setForm] = useState<IPostForm>(initialState);
    const [loading, setLoading] = useState<boolean>(false);
    const params = useParams<{ IdPost?: string }>();
    const navigate = useNavigate();

    const fetchPost = useCallback(async (id: string) => {
        setLoading(true);
        try {
            const response = await axiosAPI.get<IPostAPI>(`posts/${id}.json`);
            if (response.data) {
                setForm({
                    title: response.data.title,
                    description: response.data.description,
                });
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, []);

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const postData = {
            ...form,
            date: `${new Date().toLocaleDateString()} ${ new Date().toLocaleTimeString()}`,
        };

        try{
            if (params.IdPost) {
                await axiosAPI.put(`posts/${params.IdPost}.json`, postData);
                navigate(`/posts/${params.IdPost}`);
            } else {
                await axiosAPI.post('posts.json', postData);
                setForm(initialState);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (params.IdPost) {
            void fetchPost(params.IdPost);
        }
    }, [params.IdPost, fetchPost]);


    return (
        <>
            <Typography sx={{ textAlign: 'center' }} variant='h4'>
                {params.IdPost ? 'Edit Post' : 'Add New Post'}
            </Typography>
            {loading ? (
                    <Loader/>)
                : (
                <form onSubmit={onSubmitForm} className='mt-3'>
                    <Grid container spacing={2} sx={{mx: 'auto', width: '50%'}}>
                        <Grid size={12}>
                            <TextField
                                sx={{width: '100%'}}
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                name="title"
                                value={form.title}
                                onChange={onChangeField}
                                required
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                sx={{width: '100%'}}
                                id="outlined-basic"
                                label="Enter description"
                                variant="outlined"
                                name="description"
                                value={form.description}
                                onChange={onChangeField}
                                required
                            />
                        </Grid>
                        <Grid size={12}>
                            <Button sx={{width: '100%'}} type='submit' variant="contained">
                                {params.IdPost ? 'Save' : 'Add'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                )}
        </>
    );
};

export default PostForm;