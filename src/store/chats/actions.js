export const ADD_CHAT = 'CHAT::ADD_CHAT'
export const UPDATE_CHAT = 'CHAT::UPDATE_CHAT'

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
})

export const chatListUpdate = (chatArr) => ({
    type: UPDATE_CHAT,
    chatArr
    
})
