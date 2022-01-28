import '../App.scss';
import React from "react";
import {Box, Paper} from "@mui/material";

const MessageList = ({messageList}) => {
    return (
            <Box sx={{

            backgroundColor: 'background.paper',
            m: 1,
            '& > :not(style)': {
                minWidth: 300,
                height: 500,
            },
        }}>
            <Paper elevation={3}>
                <div className='dashboard'>
                    {messageList.map((message, index) =>
                        (
                            <div className={`message ${message.author === "me" ? "me" : "bot"}`} key={index}>
                                <div>{message.author}</div>
                                <div className={`message__${message.author === "me" ? "me" : "bot"}`}>
                                    {message.text}
                                </div>
                            </div>
                        )
                    )}
                </div>

            </Paper>
        </Box>
    )
}

export default MessageList