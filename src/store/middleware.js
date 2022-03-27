import { updateMessages } from "./messages/actions";
import {chatListUpdate} from './chats/actions'
import {API_URL_PUBLIC} from "./constants";
import { getGistsFailure, getGistsRequest, getGistsSuccess } from "./gists/actions";
import firebase from '../service/firebase';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest())
    try {
        const response = await fetch(API_URL_PUBLIC);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }
        const result = await response.json();
        dispatch(getGistsSuccess(result));
    } catch (error) {
        dispatch(getGistsFailure(error.message))
    }
}

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then((res) => {
        console.log(res)
    })
}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr))
    })
}

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);
    onValue(msgRef, (snapshot) => {
        const data = snapshot.val();
        const msg = Object.values(data);
        if (msg.length > 0) {
            dispatch(updateMessages(chatId, msg));
        }
    })
}

export const addMessageWithFB = (chatId, message) => async () => {
     const db = getDatabase(firebase);
     const messageRef = ref(db, `/messages/${chatId}`);
     const newMessageRef = push(messageRef);
     set(newMessageRef, message).then((res) => console.log(res))
}

