import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from '@mui/material/Box';
import NoteTakingPageElement from './NoteTakingPageElement';
import NoteTakingPageLeft from './NoteTakingPageLeft';
import { NoteTakingCurrentNoteKeyContext } from '../../Contexts/NoteTakingCurrentNoteKeyContext'
import { NoteDataContext } from "../../Contexts/NoteDataContext";
import { useEffect, useState } from "react";
import { Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import random from 'random-key-generator' 

var randomWords = require('random-words')

export default function Index() {
    let [notes, setNotes] = useState([]);  
    //let [value, setValue] = useState(0)
    let [currentNoteKey, setCurrentNoteKey] = useState(932832832);
    let [currentNote, setCurrentNote] = useState([])

    useEffect(() => {
        addNewNote()
        
    }, [])

    let addNewNote = () => {
        let newNotes = [...notes]
        let newBody = randomWords({exactly: 100, join: ' '})
        let newTask = {title: "New note from index", body: newBody, key: random(10)}
 
        setNotes([...newNotes, newTask])
    }

    let deleteNote = (noteId) => {
        
        // alert("Note id to delete " + noteId)
        let newNotes = [...notes]
        // let idString = ""
        // newNotes.forEach(note => {
        //     idString += note.key + " | "
        // });
        //alert("Id string before delete " + idString)
        newNotes = notes.filter(item => item.key !== noteId)

        //idString = ""
        // newNotes.forEach(note => {
        //     idString += note.key + " | "
        // })
        // alert("Id string after delete " + idString)
        setNotes(newNotes)


    }

    return(
        // API: https://mui.com/material-ui/react-grid2/
        <NoteDataContext.Provider value = { {notes, addNewNote}}>
        <NoteTakingCurrentNoteKeyContext.Provider value = { currentNoteKey} >
            <Grid2 container spacing={2} maxHeight='80%' >
                <Grid2 xs = {8}>
                    <Grid2 container>
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
                        >
                            <NoteTakingPageLeft currentNote = {currentNote} />
                        </Box>
                    </Grid2>

                </Grid2>
                
                <Grid2 xs = {4} maxHeight='100%'>
                    <Grid2 container>
                        {
                            notes.map(note => <NoteTakingPageElement 
                                    note = {note}
                                    onClickFunc = {setCurrentNote}
                                    onDeleteFunc = {deleteNote}
                                    />
                                    )
                        }
                        
                    </Grid2>
                    <Fab color="primary" aria-label="add" onClick={addNewNote}>
                        <AddIcon />
                    </Fab>
                </Grid2>
            </Grid2>
        </NoteTakingCurrentNoteKeyContext.Provider>
        </NoteDataContext.Provider>
    )
}