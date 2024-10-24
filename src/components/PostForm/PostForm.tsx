import React, {useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {IPostForm} from "../../types";
import axiosAPI from "../../axiosAPI.ts";

const initialState = {
    title: "",
    description: ""
};

const PostForm = () => {
    const [form, setForm] = useState<IPostForm>(initialState);

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const postData = {
            ...form,
            date: `${new Date().toLocaleDateString()} ${ new Date().toLocaleTimeString()}`,
        };

        await axiosAPI.post('posts.json', postData);

        setForm(initialState);
    };

    return (
        <>
            <Typography sx={{textAlign: 'center'}} variant='h4'>Add new post</Typography>
                    <form onSubmit={onSubmitForm} className='mt-3'>
                        <Grid container spacing={2} sx={{mx: 'auto', width: '50%'}}>
                            <Grid size={12}>
                                <TextField
                                    sx={{ width: '100%'}}
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
                                    sx={{ width: '100%'}}
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
                                <Button sx={{ width: '100%'}} type='submit' variant="contained">Save</Button>
                            </Grid>
                        </Grid>
                    </form>
        </>
    );
};

export default PostForm;