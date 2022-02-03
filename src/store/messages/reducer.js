import { ADD_MESSAGE } from "./actions";

const initialState = {
    messageList: {}
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
        default:
            return state;
    }
}

export default messagesReducer