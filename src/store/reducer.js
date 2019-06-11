const intialState = {
    counter: 0
}

const reducer = (state = intialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }

    else if(action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }

    else if(action.type === 'ADD') {
        return {
            counter: state.counter + action.value
        }
    }

    else if(action.type === 'SUBTRACT') {
        return {
            counter: state.counter - action.value
        }
    }
     return state;
}

export default reducer;