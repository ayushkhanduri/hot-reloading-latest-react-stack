

export const CounterReducer = (state= {time:0} ,action: TimerType.ICounterAction) => {
    switch(action.type) {
        case 'INCREMENT': return {
            ...state,
            time: ++state.time
        }

        default: return state;
    }
}