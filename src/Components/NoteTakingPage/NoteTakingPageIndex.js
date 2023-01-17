import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import NoteTakingPageElement from './NoteTakingPageElement';

export default function Index() {
    return(
        // API: https://mui.com/material-ui/react-grid2/
        <Grid2 container spacing={2}>
            <Grid2 xs = {8}>

                <Box
                    sx={{
                        width: '60em',
                        height: '50em',
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
            </Grid2>
            
            <Grid2 xs = {4} >
                <Grid2 container>
                    <NoteTakingPageElement />
                    <NoteTakingPageElement />
                    <NoteTakingPageElement />
                    <NoteTakingPageElement />
                </Grid2>
            
            </Grid2>
        </Grid2>
    )
}