export const CardReducer = (state= {} ,action) => {
    switch(action.type)  {
        case "ADD_CARD": 
            return  {
                ...state,
                collection: [state.collection, ...action.row].filter(Boolean)       
            }
        
        case "DELETE_CARD": 
            return {
                ...state,
                collection: state.collection.filter(item => item.id !== action.index)
            }
        default: return state;
    }
}