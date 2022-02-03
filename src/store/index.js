import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
import {combineReducers, createStore} from "redux";

export const store = createStore(combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())