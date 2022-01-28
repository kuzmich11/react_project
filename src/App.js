import './App.scss';
import React, {useEffect, useState} from 'react';
import { TextField } from "@material-ui/core";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const chatList = [
    {name: 'Чат 1', id: 1},
    {name: 'Чат 2', id: 2},
    {name: 'Чат 3', id: 3},
    {name: 'Чат 4', id: 4},
    {name: 'Чат 5', id: 5},
]
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


    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        setMessageList([{author: 'me', text: value}, ...messageList])
        setValue ('')
    }

    useEffect(() => {
        let timer;
        if (messageList.length > 0 && messageList[0].author === 'me'){
            timer = setInterval(() => {
                setMessageList([ {author: 'bot', text: massageBot[Math.floor(Math.random() * massageBot.length)] }, ...messageList ]
                )}, 1500)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [messageList])


    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <List sx={{ width: '250px', backgroundColor: 'aquamarine', borderRadius: '20px', border: 'solid 1px #1976d2', height: '500px', padding: '20px'}}>
                    {chatList.map((chat) =>(
                        <ListItem key={chat.id}>
                            <ListItemText
                                primary={chat.name}
                                secondary='Здесь будет описание чата'
                            />
                        </ListItem>)
                    )}
                </List>
                <div className="dashboard">
                    {messageList.map((message, index) =>
                        (
                            <div className={`message ${message.author === "me" ? "me" : "bot"}`} key={index}>
                                <div>{message.author}</div>
                                <div className={`message__${message.author === "me" ? "me" : "bot"}`}>{message.text}</div>
                            </div>
                        )
                    )}
                </div>
                <div> </div>
                <form className="form" action='#'>
                    <TextField
                        style={{ margin: '15px', width: '300px', height: '60px' }}
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        value={value}
                        onChange={handleChange}
                        autoFocus
                        inputRef={input => input && input.focus()}

                    />
                    <Button
                        style={{ margin: '15px 0', width: '150px', height: '56px' }}
                        variant="contained"
                        size="large"
                        onClick={handleClick}>
                        Отправить
                    </Button>
                    {/*<input className="form__input" onChange={handleChange} value={value} />*/}
                    {/*<button className="form__button" onClick={handleClick}>Отправить</button>*/}
                </form>
            </div>
        </ThemeProvider>


    )
}

// 5. * Добавить тему material-ui.

export default App;