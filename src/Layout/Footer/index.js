import React from 'react';
import { Box, Typography, Stack, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

class Footer extends React.Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 1400,
                    bgcolor: this.props.theme.palette.background.neutral,
                    width: '100%',
                    py: 1,
                    pl: 30,
                    borderTop: `1px solid ${this.props.theme.palette.divider}`
                }}
            >
                <Stack flexDirection="row" alignItems="center" gap={12}>
                    <Typography variant="caption" sx={{ color: this.props.theme.palette.text.disabled }}>@ 2022 Vegan Rob's</Typography>
                    <Link href="https://veganrobs.com" target="_blank" sx={{ textDecoration: 'none' }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                color: this.props.theme.palette.text.disabled 
                            }}
                        >veganrobs.com</Typography>
                    </Link>
                    <Link href="https://veganrobstoken.com" target="_blank" sx={{ textDecoration: 'none' }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                color: this.props.theme.palette.text.disabled 
                            }}
                        >veganrobstoken.com</Typography>
                    </Link>
                </Stack>
            </Box>
        );
    }
}

const withHook = (Component) => {
    return (props) => {
        const theme = useTheme ();
        return (
            <Component theme={theme} {...props} />
        )
    }
}
export default withHook(Footer);