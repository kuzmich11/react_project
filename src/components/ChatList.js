import '../App.scss';
import React from 'react';
import {List, ListItem, ListItemText, ListItemButton, ListItemIcon, Box, Paper} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const ChatList = ({chats, chatId}) => {
    return (

        <Box sx={{

            backgroundColor: 'background.paper',
            m: 1,
            '& > :not(style)': {

                minWidth: 250,
                height: 500,
            },
        }}>
            <Paper elevation={3}>
            <nav aria-label="main mailbox folders">
                <List>
                    {Object.keys(chats).map((chat, i) =>(
                    <ListItem key={i} disablePadding>
                        <Link to={`/chats/${chat}`} key={i}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdbIcon />
                            </ListItemIcon>
                            <ListItemText primary={chats[chat].name} />
                        </ListItemButton>
                        </Link>
                    </ListItem>))}
                </List>
            </nav>
            </Paper>
        </Box>
    )
}

export default ChatList