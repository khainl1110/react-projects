import NoteTakingPageIndex from './NoteTakingPage/NoteTakingPageIndex'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import PhotoProcessingIndex from './PhotoProcessingPage/PhotoProcessingIndex'
import { AppBar, Button, Grid, makeStyles } from '@mui/material'
import { Stack } from '@mui/system'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import ComponentsIndex from './ComponentsWithTest/ComponentsIndex'
import TodoPage from './TodoPage/TodoPage';

export default function Index() {

    return(
        <Router>
            <Stack spacing={2}>
                <div className='App' >
                    <AppBar position='static'>
                        <Grid2>
                            <Link to = "/note">
                                <Button color='inherit'>
                                    Note app
                                </Button>
                            </Link>

                            <Link to = "/photo">
                                <Button color = 'inherit'>
                                    Photo app
                                </Button>
                            </Link>

                            <Link to = "/react-testing">
                                <Button color = 'inherit'>
                                    React testing
                                </Button>
                            </Link>

                            <Link to = "/todo-page">
                                <Button color = 'inherit'>
                                    To do page
                                </Button>
                            </Link>
                        </Grid2>
                    </AppBar>
                </div>

                <div>
                    <Routes>
                        <Route exact path="/note" element = {<NoteTakingPageIndex />} />
                        <Route exact path = "/photo" element = {<PhotoProcessingIndex />} />
                        <Route exact path = "/react-testing" element = {<ComponentsIndex />} />
                        <Route exact path = "/todo-page" element= {<TodoPage />} />
                    </Routes>  
                </div>
            </Stack>
        </Router>
    )
}