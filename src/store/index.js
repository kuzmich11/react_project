import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import gistsReducer from "./gists/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    gists: gistsReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


