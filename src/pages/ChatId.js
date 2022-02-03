import '../App.scss';
import MessageList from "../components/MessageList";
import ChatList from "../components/ChatList";
import {Box, Grid} from "@mui/material";
import InputForm from "../components/InputForm";

const ChatId = () => {

    return (
        <Grid>
            <Box
                sx={{
                    m: 1,
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}
            >
                <ChatList />
                <div>
                    <MessageList />
                    <InputForm />
                </div>
            </Box>
        </Grid>
    )
}

export default ChatId