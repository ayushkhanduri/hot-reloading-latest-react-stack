export as namespace CardType;

export interface ICard {
    id?: string,
    title: string,
    content: string
}

export interface ICardStore {
    collection: Array<ICard>
}

export interface ICardAction {
    type: string,
    collection: Array<ICard> ,
    data? : Array<ICard>,
    id?: string
}