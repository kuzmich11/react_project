import React from "react";
import ChatList from "../components/ChatList";
import {Box, Grid, Paper} from "@mui/material";
import InputChatName from "../components/InputChatName";

const Chats = () => {
    return (
        <Grid>
            <Box
                sx={{
                    m: 2,
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}
            >
                <Paper elevation={3}>
                    <ChatList/>
                    <InputChatName/>
                </Paper>

            </Box>
        </Grid>
    )
}

export default Chats