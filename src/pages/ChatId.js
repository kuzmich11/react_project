import '../App.scss';
import {useParams} from "react-router-dom";
import MessageList from "../components/MessageList";
import ChatList from "../components/ChatList";
import NoChat from "./NoChat";
import {Box, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import InputForm from "../components/InputForm";
// import {useDispatch, useSelector} from "react-redux";
// import {addMessages} from "../store/chats/chatsActions";

const massageBot = [
    'Привет я Бот',
    'Затрудняюсь ответить. Может загуглим',
    'Не хочу с тобой говорить',
    'Давай поболтаем',
    'Моя твоя не понимать',
    'Я от тебя устал',
    'Специально длинный текст, чтобы проверить как переносятся слова в сообщении'
]

const ChatId = ({chats}) => {
    let {chatId} = useParams()
    // const { messages } = useSelector(chats => chats)
    // const dispatch = useDispatch();
    // const setMessages = useCallback(() => {
    //     dispatch(addMessages);
    //
    // }, [dispatch])

    const [messageList, setMessageList] = useState(chats[chatId].messages)
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        setMessageList([{author: 'me', text: value}, ...messageList])
        setValue('')
    }

    useEffect(() => {
        let timer;
        if (messageList.length > 0 && messageList[0].author === 'me') {
            timer = setInterval(() => {
                setMessageList([{
                        author: 'bot',
                        text: massageBot[Math.floor(Math.random() * massageBot.length)]
                    }, ...messageList]
                )
            }, 1500)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [messageList])

    return chats[chatId] ? (
        <Grid>
            <Box
                sx={{
                    m: 1,

                    backgroundColor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}
            >
                <ChatList chats={chats} chatId={chatId}/>
                <div>
                    <MessageList messageList={chats[chatId].messages}/>
                    <InputForm onChange={handleChange} onClick={handleClick} value={value}/>
                </div>
            </Box>
        </Grid>
    ) : <NoChat/>
}

export default ChatId