import {ADD_MESSAGE, addMessage} from "./messages/actions";
import {API_URL_PUBLIC} from "./constants";
import {getGistsFailure, getGistsRequest, getGistsSuccess} from "./gists/actions";

const messageBot = [
    'Привет я Бот',
    'Затрудняюсь ответить. Может загуглим',
    'Не хочу с тобой говорить',
    'Давай поболтаем',
    'Моя твоя не понимать',
    'Я от тебя устал',
    'Специально длинный текст, чтобы проверить как переносятся слова в сообщении'
]

const middleware = store => next => (action) => {
    if (action.type === ADD_MESSAGE && action.message.author !== 'bot')
    {
        const botMessage = {text: messageBot[Math.floor(Math.random() * messageBot.length)], author: 'bot'};
        setTimeout(() => store.dispatch(addMessage(action.chatId, botMessage)), 2000);
    }

    return next(action)
}

export default middleware;

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest())
    try {
        const response = await fetch(API_URL_PUBLIC);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const result = await response.json();
        dispatch(getGistsSuccess(result));
    } catch (error) {
        dispatch(getGistsFailure(error.message))
    }
}