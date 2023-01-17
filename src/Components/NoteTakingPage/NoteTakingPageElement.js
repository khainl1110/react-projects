import { CardContent, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

var randomWords = require('random-words')
let notes = [

]
export default function Index() {
    // api https://mui.com/material-ui/react-card/
    return (
        <React.Fragment>
            <CardContent>
                <Typography>
                    This is a text
                </Typography>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    defaultValue = {randomWords({exactly: 100, join: ' '})}
                    disabled
                />
            </CardContent>
        </React.Fragment>
    )
}