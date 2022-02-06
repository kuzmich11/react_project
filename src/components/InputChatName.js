import {Box, Button, Dialog, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addChat} from "../store/chats/actions";

const InputChatName = () => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

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