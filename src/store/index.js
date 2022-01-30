import profileReducer from "./profile/reducer";
import {createStore} from "redux";
// import messageReducer from "./chats/chatsReducer";

export const store = createStore (profileReducer, /*messageReducer,*/ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
