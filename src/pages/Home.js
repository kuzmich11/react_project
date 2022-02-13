import '../App.scss';
import React from "react";
import {Typography} from "@mui/material";
import {Link} from 'react-router-dom'

function Home() {
    return(
        <div>
            <Typography variant="h1">Home</Typography>
            <div>
                <Link to='login'>Sign In</Link>
            </div>
            <div>
                <Link to='signup'>Sign Up</Link>
            </div>
        </div>

    )
}

export default Home
