import '../App.scss';
import {useState} from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Box,
    Paper,
    Button,
    DialogTitle, TextField, Dialog
} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addChat} from "../store/chats/actions";
import {getChatList} from "../store/chats/selectors";

const ChatList = ({chatId}) => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const chats = useSelector(getChatList, shallowEqual);
    const dispatch = useDispatch();

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    };

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
                <Paper elevation={3}>
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
                    <Button onClick={handleOpen}>Добавить чат</Button>
                </Paper>
            </Box>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Submit
                </Button>
            </Dialog>

        </>
    )
}

export default ChatList