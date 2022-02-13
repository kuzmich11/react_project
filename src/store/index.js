import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import middleware from "./middleware";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(middleware)));

export const persistor = persistStore(store);
