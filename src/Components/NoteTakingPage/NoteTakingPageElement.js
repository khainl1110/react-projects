import { CardContent, Fab, IconButton, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import ClearIcon from '@mui/icons-material/Clear';

export default function Index({note, onClickFunc, onDeleteFunc}) {
    let {title, body, key} = note
    // api https://mui.com/material-ui/react-card/
    return (
        <React.Fragment>
            <CardContent>
                <Stack>
                    <Typography>
                        {key}
                    </Typography>
                    <Typography>
                        {title}
                    </Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        defaultValue = {body}
                        
                        onClick = {() => onClickFunc(note)}
                    />
                    <Stack direction={"row"}>
                        <IconButton>
                            <ClearIcon onClick = {() => onDeleteFunc(note.key)}/>
                        </IconButton>
                    </Stack>
                </Stack>
            </CardContent>
        </React.Fragment>
    )
}