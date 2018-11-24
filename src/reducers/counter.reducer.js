const CounterReducer = (state= {} ,action) => {
    switch(action.type) {
        case 'INCREMENT': return {
            ...state,
            time: ++state.time
        }
    }
}