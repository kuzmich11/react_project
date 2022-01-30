import React, {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "../App.scss";
import Home from './Home';
import Profile from './Profile';
import ChatId from "./ChatId";
import {Button, ButtonGroup} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Chats from "./Chats";
import NoChat from "./NoChat";


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

const initialChats = {
    id1: {
        name: 'Чат 1',
        messages: [{
            text: 'Привет, я бот чата 1',
            author: 'Bot',
        }]
    },
    id2: {
        name: 'Чат 2',
        messages: [{
            text: 'Привет, я бот чата 2',
            author: 'Bot2',
        }]
    }
}

function Routers() {
    const [chatList, setChatList] = useState(initialChats)

    return (
        <ThemeProvider theme={theme}>

            <ButtonGroup sx={{
                p: 1,
                m: 2,
                backgroundColor: 'background.default',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                justifyItems: 'center',
            }}
                         size="large" variant="contained" aria-label="large button group">
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
                <Link to='chats'>
                    <Button>Chats</Button>
                </Link>
                <Link to='profile'>
                    <Button>Profile</Button>
                </Link>
            </ButtonGroup>

            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/chats" element={<Chats chats={chatList}/>}/>
                    <Route path="/chats/:chatId" element={<ChatId chats={chatList}/>}/>
                    <Route path="*" element={<NoChat/>}/>
                </Routes>
            </div>

        </ThemeProvider>
    );
}

export default Routers

