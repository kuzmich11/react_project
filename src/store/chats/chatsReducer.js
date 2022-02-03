const initialChats = {
    id1: {
        name: 'Чат 1',
        messages: [{
            text: 'Привет, я бот чата 1',
            author: 'Bot',
        }]
    },
    id2: {
        name: 'Чат 2',
        messages: [{
            text: 'Привет, я бот чата 2',
            author: 'Bot2',
        }]
    }
}

const messageReducer = ( chats = initialChats, action ) => {
    let value = ''
    switch (action.type) {
        case 'ADDMESSAGES_ACTION':
            console.log('action', action)
            return {
                ...chats,
                id1: {...id1, messages: [{author: 'me', text: value}, ...chats]}
            }
        default:
            return chats
    }
}

export default messageReducer