import '../App.scss';
import React, {useCallback, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addMessage} from "../store/messages/actions";
import {useParams} from "react-router-dom";
import {getProfileName} from "../store/profile/selectors";
import {Box, Button, TextField} from "@mui/material";

function InputMessages() {
    const [value, setValue] = useState('');

    const profileName = useSelector(getProfileName, shallowEqual);
    const {chatId} = useParams();

    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    },[])

    const onAddMessage = useCallback((message, author) => {
        dispatch(addMessage(chatId, {
            text: message,
            author: author
        }));
        setValue('');
    },[dispatch, chatId])

    const handleButton = () => {
        onAddMessage(value, profileName);
    }

    return (
        <>
            <Box
                sx={{
                    m: 1,
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: '3fr 1fr',
                    gridColumnGap: '10px',
                }}
            >
                <TextField
                style={{margin: '15px 0', width: '100%', height: '60px'}}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={value}
                onChange={handleChange}
                autoFocus
                inputRef={input => input && input.focus()}
            />
            <Button
                style={{margin: '15px 0', width: '100%', height: '56px'}}
                variant="contained"
                size="large"
                onClick={handleButton}
            >
                Отправить
            </Button>
            </Box>
            {/*<input type='text' className="form__input" onChange={handleChange} value={value} />*/}
            {/*<button className="form__button" onClick={handleButton}>Отправить</button>*/}
        </>
    )
}

export default InputMessages