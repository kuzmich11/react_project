import './App.scss';
import React, {useEffect, useState} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import MessageList from './components/MessageList';
import InputMessages from './components/InputMessages';
import ChatList from "./components/ChatList";
import {Paper, Box, Grid} from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#0098FF",
        },
    },
});

const massageBot = [
    'Привет я Бот',
    'Затрудняюсь ответить. Может загуглим',
    'Не хочу с тобой говорить',
    'Давай поболтаем',
    'Моя твоя не понимать',
    'Я от тебя устал',
    'Специально длинный текст, чтобы проверить как переносятся слова в сообщении'
]

function App() {
    const [messageList, setMessageList] = useState([])
    const [value, setValue] = useState('')
    const [chatList, setChatList] = useState([
        {name: 'Чат 1', id: 1},
        {name: 'Чат 2', id: 2},
        {name: 'Чат 3', id: 3},
        {name: 'Чат 4', id: 4},
        {name: 'Чат 5', id: 5},
    ])

    // const handleChange = (event) => {
    //     setValue(event.target.value)
    // }

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setMessageList([{author: 'me', text: value}, ...messageList])
    //     setValue('')
    // }

    // useEffect(() => {
    //     let timer;
    //     if (messageList.length > 0 && messageList[0].author === 'me') {
    //         timer = setInterval(() => {
    //             setMessageList([{
    //                     author: 'bot',
    //                     text: massageBot[Math.floor(Math.random() * massageBot.length)]
    //                 }, ...messageList]
    //             )
    //         }, 1500)
    //     }
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [messageList])

    return (
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            p: 1,
                            backgroundColor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                        }}
                    >
                        <Paper variant="outlined">
                            <ChatList chatList={chatList}/>
                        </Paper>
                        <Paper variant="outlined">
                            <MessageList messageList={messageList}/>
                        </Paper>
                        <Paper variant="outlined">
                            <InputMessages onChange={handleChange} onClick={handleClick} value={value}/>
                        </Paper>
                    </Box>
                </ThemeProvider>
            </Grid>
        </Grid>

    )
}

// 1. Установить react-router-dom. Добавить домашнюю страницу по адресу “/” со списком ссылок на страницу чатов и страницу профиля.
// 2. Добавить страницу профиля (пока не несет никакой функциональности, можно сделать ее пустой).
// 3. Настроить разделение приложения на чаты с помощью роутера (использовать параметры url).
// Приложение должно корректно работать, если пользователь вводит идентификатор несуществующего чата или если идентификатора чата нет (т.е. адрес “/chats/”).
// 4. * Добавить возможность удаления и добавления чатов.

export default App;