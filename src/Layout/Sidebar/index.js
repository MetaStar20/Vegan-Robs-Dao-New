import React from 'react';
import { 
    Box,
    Drawer,
    Toolbar,
    Typography,
    Divider,
    Button,
    List,
    ListItem,
    ListItemIcon,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link, matchPath, useLocation } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const drawerWidth = 240;
const Menu = () => {

    const theme = useTheme();
    const { pathname } = useLocation();
    const [selected, setSelected] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelected(index);
    }

    return (
        <div>
            <Toolbar sx={{ my: 2, mt: 6 }} />
            {/* <Divider /> */}
            <List>
                {[
                    { text: 'Dashboard', route: '/', icon: DashboardOutlinedIcon }, 
                    { text: 'Election Status', route: '/elections', icon: BarChartIcon }, 
                    { text: 'Create New Election', route: '/create', icon: HowToVoteOutlinedIcon }, 
                    { text: 'Vote', route: '/vote', icon: HowToRegIcon }
                ].map((element, key) => (                
                <Link 
                    key={key}
                    to={element.route} 
                    style={{ 
                        textDecoration: 'none', color: 'inherit' 
                    }}
                >
                    <ListItem sx={{ p: .5 }}>
                        <Button
                            fullWidth
                            color="success"
                            variant={(element.route === '/' ? pathname === '/' : pathname.toLowerCase().includes(element.route)) ? 'contained' : 'text'}
                            selected={element.route === '/' ? pathname === '/' : pathname.toLowerCase().includes(element.route)}
                            onClick={(event) => handleListItemClick(event, key)}
                            sx={{ 
                                gap: 1.5, 
                                // py: 1,
                                borderRadius: 2,
                                color: '#fff',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 'unset' }}>
                                { (element.route === '/' ? pathname === '/' : pathname.toLowerCase().includes(element.route)) ? <element.icon sx={{ color: '#fff' }}/> : <element.icon /> }
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <Typography variant="body1" sx={{
                                color: (element.route === '/' ? pathname === '/' : pathname.toLowerCase().includes(element.route)) ? theme.palette.white : theme.palette.text.primary
                            }}>{element.text}</Typography>
                        </Button>
                    </ListItem>
                </Link>
                ))}
            </List>
        </div>
    )
}

export default function Sidebar (props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme ();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box
            component="nav"
            sx={{ 
                width: { sm: drawerWidth }, 
                flexShrink: { sm: 0 },
                bgcolor: theme.palette.background.paper
            }}
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: drawerWidth,
                        bgcolor: theme.palette.background.default,
                    },
                }}
            >
                <Menu />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: drawerWidth,
                        bgcolor: theme.palette.background.default,
                    },
                }}
                open
            >
                <Menu />
            </Drawer>
        </Box>
    )
}