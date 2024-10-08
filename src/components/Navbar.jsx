import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div>Navbar</div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit" sx={{backgroundColor:"gray-dark"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        ONLINE STORE APP
                    </Typography>
                    <Button href='/home' color="inherit">Home</Button>
                    <Link to={'/add'}> <Button color="inherit">Add New</Button></Link >
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar