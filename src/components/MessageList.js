import '../App.scss';
import React, {useCallback} from "react";
import {Box} from "@mui/material";
import {shallowEqual, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMessageList} from "../store/messages/selectors";

const MessageList = () => {
    const messages = useSelector(getMessageList, shallowEqual)

    let {chatId} = useParams();
    const getMessagesById = messages[chatId];

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
                {getMessagesById?.map((message, index) => renderMessage(message, index))}
            </div>
        </Box>
    )
}

export default MessageList