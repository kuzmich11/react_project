import {Box, Button, Dialog, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addChat} from "../store/chats/actions";
import {getDatabase, ref, push, set, get, child} from 'firebase/database'
import firebase from "../service/firebase";

const InputChatName = () => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        const database = getDatabase(firebase);
        const chatRef = ref(database, '/chats');
        const newChatRef = push(chatRef);
        set(newChatRef, {name: newChatName}).then((res) => {
            console.log(res)
        })

        setNewChatName("");
        handleClose();
    };

    return (
        <>
            <Box
                sx={{
                    m: 1,
                    backgroundColor: 'background.default',
                }}>
                <Button
                    style={{margin: '15px 0', width: '100%', height: '56px'}}
                    variant="contained"
                    size="large"
                    onClick={handleOpen}>
                    Добавить чат
                </Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Please enter a name for new chat</DialogTitle>
                    <TextField value={newChatName} onChange={handleChange}/>
                    <Button onClick={onAddChat} disabled={!newChatName}>
                        Submit
                    </Button>
                </Dialog>
            </Box>
        </>
    )
};

export default InputChatName;
