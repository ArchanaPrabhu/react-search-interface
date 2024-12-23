import React from "react"
import InputBase from "@mui/material/InputBase";
import Divider from "material-ui/Divider";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";


export default function CustomisedInputBase() {
    return (
        <Paper component="form"
            sx={{ p: '2px 0px', display: 'flex', alignItems: 'center', width: 780, height: 'fit-content', marginTop: '20px' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }} // sx allows us to add styling. ml -> amrgin left by 1 unit, unit is 8px
                // flex sets the flex-grow, shrink and basis to 1
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Button disabled>Clear</Button>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon /></IconButton>
        </Paper>
    )
}