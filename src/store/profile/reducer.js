import {CHANGE_NAME} from "./actions";

const initialState = {
    name: 'Vladimir'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return{
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

export default profileReducer