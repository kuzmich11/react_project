import {ADD_MESSAGE, addMessage} from "./messages/actions";

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