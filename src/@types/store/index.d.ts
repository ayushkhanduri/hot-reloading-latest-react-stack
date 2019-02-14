import { ICardStore } from '../card';
import { ITimerStore } from '../timer';


export as namespace StoreType;

interface IStore {
    Card: ICardStore,
    Counter: ITimerStore
}