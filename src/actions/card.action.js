export function AddCards(items) {
    return {
        type:'ADD_CARD',
        row: Array.isArray(items) ? items : [items]
    }
}

export function DeleteCard(id) {
    return {
        type: 'DELETE_CARD',
        index: id
    }
}

export function UpdateCard(id,data) {
    return {
        type: 'UPDATE_CARD',
        index: id,
        row: data
    }
}