import React from "react";
import ChatList from "../components/ChatList";
import {useParams} from "react-router-dom";
import {Box, Grid} from "@mui/material";

const Chats = ({chats}) => {
    const {chatId} = useParams()
    return(

        <Grid>
            <Box
                sx={{
                    m: 1,
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}
            >
            <ChatList chats={chats} chatId={chatId}/>
            </Box>
        </Grid>
    )
}

export default Chats