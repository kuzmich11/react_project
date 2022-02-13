import '../App.scss';
import React, {useCallback, useEffect, useState} from "react";
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import {child, get, getDatabase, ref} from "firebase/database";
import firebase from "../service/firebase";

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    let {chatId} = useParams();

    useEffect(()=>{
        const database = getDatabase(firebase);
        const databaseRef = ref(database);
        get(child(databaseRef, `/messages/${chatId}`)).then((snapshot)=>{
            if (snapshot.exists()){
                const msg = Object.values(snapshot.val());
                setMessages(msg)
            } else {
                console.log('no data')
            }
        })
    },[chatId])

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
                {messages?.map((message, index) => renderMessage(message, index))}
            </div>
        </Box>
    )
}

export default MessageList