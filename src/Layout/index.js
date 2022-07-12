import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { 
    Box, 
    CssBaseline,
    Toolbar,
    Typography

} from '@mui/material';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const drawerWidth = 240;
  
export default function Layout () {  
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header handleDrawerOpen={handleDrawerOpen} />
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, 
                    width: '100%'
                    // width: { sm: `calc(100% - ${drawerWidth}px)` } 
                }}
            >
                <Toolbar sx={{ my: 2 }} />
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}