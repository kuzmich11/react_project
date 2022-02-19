import '../App.scss';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon, Box, } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initTrackerWithFB } from '../store/middleware';

const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initTrackerWithFB())
    }, [dispatch])

    return (
        <>
            <Box sx={{
                backgroundColor: 'background.paper',
                m: 1,
                '& > :not(style)': {
                    minWidth: 250,
                    height: 500,
                },
            }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {chats.map((chat, i) => (
                            <ListItem key={i} disablePadding>
                                <Link to={`/chats/${chat.id}`} key={i}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AdbIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={chat.name}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>))}
                    </List>
                </nav>
            </Box>
        </>
    )
}

export default ChatList