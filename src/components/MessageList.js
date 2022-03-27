import '../App.scss';
import React, { useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesByChatIdWithFB } from '../store/middleware';

const MessageList = () => {
    const messages = useSelector(state => state.messages.messageList);
    const dispatch = useDispatch();
    let {chatId} = useParams();

    useEffect(() => {
        dispatch(getMessagesByChatIdWithFB(chatId))
    }, [dispatch, chatId])

    const renderMessage = useCallback((message, index) => {
        return (
            <div className={`message ${message.author !== "bot" ? "me" : "bot"}`} key={index}>
                <div>{message.author}</div>
                <div className={`message__${message.author !== "bot" ? "me" : "bot"}`}>
                    {message.text}
                </div>
            </div>)
    }, [])

    return (
        <Box sx={{
            backgroundColor: 'background.paper',
            m: 1,
            '& > :not(style)': {
                minWidth: 300,
                height: 500,
            },
        }}>
            <div className='dashboard'>
                {messages[chatId]?.reverse().map((message, index) => renderMessage(message, index))}
            </div>
        </Box>
    )
}

export default MessageList