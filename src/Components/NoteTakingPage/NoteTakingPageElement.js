import { CardContent, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

var randomWords = require('random-words')
let notes = [

]
export default function Index({title, body}) {
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
                />
            </CardContent>
        </React.Fragment>
    )
}