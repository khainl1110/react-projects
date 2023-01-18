import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import NoteTakingPageElement from './NoteTakingPageElement';
import { useEffect, useState } from "react";

var randomWords = require('random-words')

export default function Index() {
    let [notes, setNotes] = useState([]);    

    useEffect(() => {
        for(let i = 0; i < 10; i++) {
            let newNotes = [...notes]
            let newBody = randomWords({exactly: 100, join: ' '})
            newNotes.push({title: "New note", body: newBody })
            setNotes(newNotes)
        }
       
    }, [notes])

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
                    <NoteTakingPageElement title={"text"} body = {"another text"}/>
                    <NoteTakingPageElement />
                    <NoteTakingPageElement />
                    <NoteTakingPageElement />
                </Grid2>
            
            </Grid2>
        </Grid2>
    )
}