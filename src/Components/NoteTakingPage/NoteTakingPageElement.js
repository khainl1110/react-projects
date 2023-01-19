import { CardContent, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

export default function Index({note, onClickFunc}) {
    let {title, body, key} = note
    // api https://mui.com/material-ui/react-card/
    return (
        <React.Fragment>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    defaultValue = {body}
                    disabled
                    onClick = {() => onClickFunc(note)}
                />
            </CardContent>
        </React.Fragment>
    )
}