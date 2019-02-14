export const CardReducer = (state:CardType.ICardStore,action:CardType.ICardAction) => {
    switch(action.type)  {
        case "ADD_CARD": 
            return  {
                collection: [state.collection, ...action.data].filter(Boolean)       
            }
        
        case "DELETE_CARD": 
            return {
                collection: state.collection.filter(item => item.id !== action.id)
            }
        default: return state || {};
    }
}