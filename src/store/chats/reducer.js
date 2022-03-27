import { ADD_CHAT, UPDATE_CHAT } from "./actions";

const initialState = {
    chatList: [],
}

const chatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, 
                {
                    id: `id${state.chatList.length}`,
                    name: action.name, 
                }
            ],
            }
        case UPDATE_CHAT:
            return {
                 ...state,
                chatList: action.chatArr
            }
        default:
            return state;    
    }
}

export default chatsReducer