import { ADD_MESSAGE, UPDATE_MESSAGES } from "./actions";

const initialState = {
    messageList: []
    // messageList:{
    // chatId, 
    // message: {author, text}
    // }
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [

                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`// Проверить
                        },
                        ...currentList,
                    ],
                },
            }
        }
        case UPDATE_MESSAGES: 
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
                    
                
            }
        
        default:
            return state;
    }
}

export default messagesReducer