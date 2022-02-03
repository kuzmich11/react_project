
const initialState = {
    showName: true,
    name: 'Vladimir'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            console.log('action', action)
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

export default profileReducer



