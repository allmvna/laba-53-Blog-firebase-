import { Container, Typography } from "@mui/material";

const About = () => {
    return (
        <>
            <Typography variant='h4' sx={{ mb: 2, textAlign: 'center', color: '#000' }}>
                About Us
            </Typography>
            <Container
                sx={{
                    border: '3px solid #000',
                    borderRadius: '10px',
                    p: 3,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <img
                    src="https://st.depositphotos.com/1620075/3629/i/450/depositphotos_36290441-stock-photo-blog.jpg"
                    alt="Blog illustration"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '10px',
                        marginRight: '10px',
                    }}
                    loading="lazy"
                />
                <Typography sx={{ color: '#000', textAlign: 'justify' }}>
                    This blog application, designed to work with the API on Firebase,
                    provides users with the ability to easily create, edit, and view posts.
                    Users can also delete or edit a post using the appropriate buttons.
                    When you click on "Delete", the post is deleted using a DELETE request to the API,
                    after which it is redirected to the main page. The Edit button opens the post
                    editing page (/posts/:id/edit), where the form
                    fields are automatically filled in with the current post values.
                </Typography>
            </Container>
        </>
    );
};

export default About;
