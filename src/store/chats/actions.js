export const ADD_CHAT = 'CHAT::ADD_CHAT'

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
})