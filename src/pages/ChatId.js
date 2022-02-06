import '../App.scss';
import MessageList from "../components/MessageList";
import ChatList from "../components/ChatList";
import {Box, Paper} from "@mui/material";
import InputMessages from "../components/InputMessages";
import InputChatName from "../components/InputChatName";
import React from "react";

const ChatId = () => {
    return (
        <Box
            sx={{
                m: 2,
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gridColumnGap: '10px',
            }}
        >
            <Paper elevation={3}>
                <ChatList/>
                <InputChatName/>
            </Paper>
            <Paper elevation={3}>
                <div>
                    <MessageList/>
                    <InputMessages/>
                </div>
            </Paper>
        </Box>
    )
}

export default ChatId