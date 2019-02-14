

export function AddCards(items: Array<CardType.ICard> | CardType.ICard) {
    return {
        type:'ADD_CARD',
        data: Array.isArray(items) ? items : [items]
    }
}

export function DeleteCard(id:string) {
    return {
        type: 'DELETE_CARD',
        id
    }
}

export function UpdateCard(id:string,data:any) {
    return {
        type: 'UPDATE_CARD',
        id,
        data
    }
}