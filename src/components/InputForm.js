import '../App.scss';
import React, {useCallback, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {addMessage} from "../store/messages/actions";
import {useParams} from "react-router-dom";
import {getMessageList} from "../store/messages/selectors";
import {getProfileName} from "../store/profile/selectors";

const massageBot = [
    'Привет я Бот',
    'Затрудняюсь ответить. Может загуглим',
    'Не хочу с тобой говорить',
    'Давай поболтаем',
    'Моя твоя не понимать',
    'Я от тебя устал',
    'Специально длинный текст, чтобы проверить как переносятся слова в сообщении'
]

function InputForm(props) {
    const [value, setValue] = useState('');

    const messages = useSelector(getMessageList, shallowEqual)
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
    },[dispatch,value])

    const handleButton = () => {
        onAddMessage(value, profileName);
    }

    useEffect(() => {
        let timer;
        const currentChat = messages[chatId]
        if (currentChat?.length > 0 && currentChat[0].author === profileName) {
            timer = setInterval(() => {
                onAddMessage(massageBot[Math.floor(Math.random() * massageBot.length)], 'bot')

            }, 1500)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [messages[chatId]])

    return (
        <>
            {/* <TextField*/}
            {/*    style={{margin: '15px', width: '300px', height: '60px'}}*/}
            {/*    id="outlined-basic"*/}
            {/*    label="Outlined"*/}
            {/*    variant="outlined"*/}
            {/*    value={props.value}*/}
            {/*    onChange={props.onChange}*/}
            {/*    autoFocus*/}
            {/*    inputRef={input => input && input.focus()}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    style={{margin: '15px 0', width: '150px', height: '56px'}}*/}
            {/*    variant="contained"*/}
            {/*    size="large"*/}
            {/*    onClick={props.onClick}*/}
            {/*>*/}
            {/*    Отправить*/}
            {/*</Button>*/}
            <input type='text' className="form__input" onChange={handleChange} value={value} />
            <button className="form__button" onClick={handleButton}>Отправить</button>
        </>
    )
}

export default InputForm