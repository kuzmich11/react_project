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
import {useEffect, useState} from "react";
import {child, get, getDatabase, ref} from "firebase/database";
import firebase from "../service/firebase";

const ChatList = () => {
    const [chats, setChats] = useState([]);
    useEffect(()=>{
        const database = getDatabase(firebase);
        const databaseRef = ref(database);
        get(child(databaseRef, '/chats')).then((snapshot)=>{
            if (snapshot.exists()){
                const obj = snapshot.val();
                const chatsId = Object.keys(obj);
                const chatArr = chatsId.map((item)=> ({id: item, name: obj[item].name}))
                setChats(chatArr)
            } else {
                console.log('no data')
            }
        })
    },[])

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