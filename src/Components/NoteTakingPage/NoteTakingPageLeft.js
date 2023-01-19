import { Button, Card, TextField } from "@mui/material"
import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react"
import { NoteDataContext } from "../../Contexts/NoteDataContext";

export default function Index({currentNote}) {
    const {notes, addNewNote} = useContext(NoteDataContext);

    let [title, setTitle] = useState()
    let [body, setBody] = useState()

    useEffect(() => {
        
        setTitle(currentNote.title)
        setBody(currentNote.body)
    }, [currentNote])

    return (
        <Card sx = {{
            minWidth: 300, 
            maxWidth: '50%',
            margin: '2%'
            }}>
            <Stack>
                <TextField defaultValue = {title} multiline/>
               
               <TextField defaultValue = {body} multiline />
            </Stack>

            <Button></Button>
        </Card>
    )
}