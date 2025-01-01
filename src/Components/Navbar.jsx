import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const Navbar = () => {
    const button={marginRight:'20px', fontSize:'1.2rem', fontWeight:'700', padding:'0.3rem 1.4rem'}
    return (
            <AppBar sx={{ bgcolor: '#333' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
    );
};
