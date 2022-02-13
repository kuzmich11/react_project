import '../App.scss';
import {
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Box,
} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom';
import {shallowEqual, useSelector} from "react-redux";
import {getChatList} from "../store/chats/selectors";

const ChatList = () => {
    const chats = useSelector(getChatList, shallowEqual);
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