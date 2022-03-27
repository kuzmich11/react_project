export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
})

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages,
})